# MFE Shop — instrukce a troubleshooting (česky)

Krátce: vytvořím přehledný README popisující, jak projekt spustit (dev i preview), co dělá `vite preview`, jak spustit preview z konzole a jak řešit chybu RUNTIME-009 (#Please call createInstance first) a související 404 chyby z `preload-helper`.

Obsah:
- Co je v repo
- Požadavky
- Instalace
- Spuštění během vývoje (dev)
- Co dělá `vite preview` a jak ho spustit
- Časté chyby a řešení
  - RUNTIME-009: "Please call createInstance first"
  - 404 chyby `preload-helper` při preview (assets not found)
  - `concurrently: command not found`
- Rychlé příkazy

---

Co je v tomto repozitáři
- Monorepo se 3 balíčky v `packages/`:
  - `shell` (host)
  - `products` (remote)
  - `cart` (remote)

Požadavky
- Node.js (doporučeno LTS)
- pnpm (repo používá pnpm workspace)

Instalace (z kořene projektu)

```bash
pnpm install
```

Důležité: pokud se při spouštění skriptu objeví `concurrently: command not found`, spusť:

```bash
pnpm -w add -D concurrently
# nebo (rychle) globálně
pnpm add -g concurrently
```

Pro vývoj (lokální hot-reload)
- Spustí všechny tři projekty paralelně (dev):

```bash
pnpm run all
# nebo spustit jednotlivě v každé složce
pnpm --filter shell dev
pnpm --filter products dev
pnpm --filter cart dev
```

Co dělá `vite preview` a proč je v skriptech
- `vite preview` slouží k otestování "production" buildu lokálně. Bere složku `dist` (výsledek `vite build`) a spouští server, který tento statický build servíruje.
- V tomto repo jsou preview-skripty nastaveny takto (příklad ze `packages/shell/package.json`):

  - `concurrently "vite build --watch" "vite preview --port 5173 --strictPort"`
  - To znamená: provádí se průběžná (watch) produkční sestavení do `dist` a zároveň se spustí preview server, který servíruje obsah z `dist`.
  - Používá se proto, abyste viděli chování buildu (hashované assets, chování module-federation v produkční podobě) bez nutnosti deployovat.

Jak spustit preview z konzole (příklady)

Ve složce `packages/products`:

```bash
pnpm --filter products preview
```

Nebo z kořene (monorepo skript):

```bash
pnpm run all_with_preview
```

Troubleshooting: RUNTIME-009 "Please call createInstance first"
- Problém: runtime generuje chybu `Please call createInstance first` (RUNTIME-009). To znamená, že kód se pokouší zavolat metody z ModuleFederation runtime (např. `loadRemote`, `loadShare`) dřív, než je vytvořen/registrován MF instance.
- Proč se to stane v tomto projektu (možné příčiny):
  1. Race condition při startu: host (shell) nebo importovaný skript volá runtime API dřív, než plugin inicializoval instanci.
  2. Použití runtime API přímo bez build pluginu, nebo chybějící `@module-federation/enhanced` v daném balíčku.
  3. Při preview/build režimu může dojít ke zpoždění zaregistrování instancí nebo nesprávnému pořadí načítání souborů.

Možná řešení (od nejjednodušších):

1) Ujistěte se, že používáte plugin `@module-federation/vite` v `vite.config.js` (všechny tři balíčky mají konfiguraci v `packages/*/vite.config.js`). Plugin by měl automaticky vytvořit instanci. Pokud někde voláte `@module-federation/enhanced/runtime` dřív, než plugin proběhne, může to způsobit chybu.

2) Zkontrolujte, že pokud používáte `@module-federation/enhanced/runtime` (např. `loadRemote`), máte v projektu závislost `@module-federation/enhanced` (většinou stačí v hostu). V `packages/shell/package.json` už vidím `@module-federation/enhanced` — u remotes to není nutné, pokud tam API nepoužíváte.

3) Bezpečnostní fallback (doporučeno při problémech s pořadím načítání):
- Před voláním `loadRemote`/`loadShare` zkontrolujte, zda existuje MF instance, nebo vytvořte samostatnou instanci pokud není:

```js
// fallback v src/main.js (shell) — zkontrolujte importy
import { createInstance, loadRemote } from '@module-federation/enhanced/runtime';

// pokud není instance vytvořená pluginem, vytvoříme vlastní
if (!window.__FEDERATION__ || (Array.isArray(window.__FEDERATION__.__INSTANCES__) && window.__FEDERATION__.__INSTANCES__.length === 0)) {
  const mf = createInstance({
    name: 'shell',
    remotes: [
      { name: 'products', entry: 'http://localhost:5001/remoteEntry.js' },
      { name: 'cart', entry: 'http://localhost:5002/remoteEntry.js' },
    ],
  });
  // pak použít mf.loadRemote('products') nebo globální loadRemote
}

// nebo čekat explicitně než plugin zaregistruje instanci:
const waitForMF = async () => {
  for (let i = 0; i < 20; i++) {
    if (window.__FEDERATION__ && window.__FEDERATION__.__INSTANCES__ && window.__FEDERATION__.__INSTANCES__.length > 0) return;
    await new Promise(r => setTimeout(r, 100));
  }
  // fallback createInstance (viz výše)
};

await waitForMF();
// safe to call loadRemote
```

4) Debug: v konzoli se podívejte na `__FEDERATION__.__INSTANCES__` — pokud tam vidíte instanci, plugin už proběhl. Když tam není, plugin se nestihl spustit.

404 chyby `preload-helper` / assets not found při preview
- Symptom: při načítání remote komponent se v konzoli objevují 404 pro `assets/...` nebo pro `_plugin-vue_export-helper-*.js` a načítání remote zhasne.
- Důvody:
  - `remoteEntry.js` od remotu odkazuje na built assets (hashované jmenné soubory v `dist/assets`). Preview server musí servírovat tyto soubory z `dist` správného projektu/portu.
  - Pokud `vite preview` neběží na správném portu, nebo build ještě nebyl dokončen (watch build ještě nestihl vytvořit soubory), preview server nic nenajde => 404.
  - Nebo `base`/`origin` konfigurace v `vite.config.js` způsobuje špatné cesty.

- Řešení:
  1. Ověřte, že remote `remoteEntry.js` je dostupný v prohlížeči (otevřít např. http://localhost:5001/remoteEntry.js). Pokud 404, remote preview/server neběží nebo je v jiné složce.
  2. Pokud používáte `vite build --watch` + `vite preview`, počkejte chvilku — watch build musí nejprve vyrobit `dist` a `assets`.
  3. Přidejte v `vite.config.js` pro remotes `origin: 'http://localhost:5001'` (už tam je ve vašem configu) a ujistěte se, že preview běží na tom portu (`--port 5001`).
  4. Otevřete `remoteEntry.js` a zkontrolujte, jaké cesty generuje (hledat `preload-helper` odkazy). To pomůže zjistit, kde se očekávají assets.
  5. Pokud se stále seká, zkuste jednoduše buildnout remote ručně a spustit preview bez watch:

```bash
# v packages/products
pnpm --filter products build
pnpm --filter products preview -- --port 5001 --strictPort
```

Pak otevřete shell (host) a ověřte, že host načítá `remoteEntry.js` z `http://localhost:5001/remoteEntry.js` a že odkazy v něm odpovídají skutečným souborům v `dist`.

`concurrently: command not found`
- Příčina: `concurrently` není nainstalované lokálně (nebo není dostupné v PATH pro skripty).
- Oprava: z kořene repozitáře spusťte `pnpm install` nebo explicitně nainstalujte:

```bash
pnpm -w add -D concurrently
```

Rychlé tipy a checklist pro debug spuštění (postup krok-za-krokem)
1. `pnpm install` v kořeni.
2. Spusťte remotes jednotlivě: `pnpm --filter products dev` a `pnpm --filter cart dev` — ověřte že běží a že `remoteEntry.js` je dostupný (v dev režimu plugin generuje runtime remoteEntry URL). Otevřete např. http://localhost:5001/remoteEntry.js
3. Spusťte shell: `pnpm --filter shell dev`.
4. Pokud chcete testovat production-like chování, buildněte a spusťte preview pro remote:

```bash
pnpm --filter products build
pnpm --filter products preview -- --port 5001 --strictPort
```

5. Ověřte v konzoli `__FEDERATION__.__INSTANCES__` a případně přidejte fallback createInstance do `src/main.js` pokud vidíte RUNTIME-009.

Další kroky / doporučení
- Pokud se problém opakuje jen občas (na první load) a po refresi se vše spraví, je to pravděpodobně race condition. Přidání jednoduchého čekání na existenci MF instance nebo vytvoření fallback instance vyřeší problém trvale.
- Můžeme do repozitáře přidat malý wrapper (`src/mf-fallback.js`), který zkontroluje a vytvoří instanci pokud chybí; rád to udělám, pokud chceš, abych to tam přidal.

Kontakt / help
- Napiš sem, pokud chceš, abych přidal automatický fallback do `packages/shell/src/main.js` (nebo věškeré kroky zpřesnil). Rychle to doplním a otestuji.

---

Výsledné rychlé příkazy (sh):

```bash
# nainstalovat závislosti
pnpm install

# spustit všechno v dev režimu
pnpm run all

# nebo zkoordinované preview (build + preview)
pnpm run all_with_preview

# nebo spustit jednotlivě
pnpm --filter products dev
pnpm --filter cart dev
pnpm --filter shell dev

# build + standalone preview pro products
pnpm --filter products build
pnpm --filter products preview -- --port 5001 --strictPort
```

---

Poznámka: README je psané česky a obsahuje konkrétní tipy pro chyby, které jsi viděl (RUNTIME-009, preload-helper 404, concurrently). Pokud chceš, doplním do projektu automatický fallback (kód) a upravím `src/main.js` v `shell` tak, aby se chyba RUNTIME-009 neprojevila vůbec — napiš a tu změnu provedu.
