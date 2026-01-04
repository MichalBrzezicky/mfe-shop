# MFE Shop — instrukce

Obsah:

- Co je v repo
- Požadavky
- Instalace
- Spuštění během vývoje (dev)
- Co dělá `vite preview` a jak ho spustit
- Rychlé příkazy

---

Co je v tomto repozitáři

- Monorepo se 3 balíčky v `packages/`:
  - `shell` (host)
  - `products` (remote)
  - `cart` (remote)
  - `shared` - sdílené komponenty jako buttons, atd (zatím nebylo potřeba)

Požadavky

- Node.js (doporučeno LTS)
- pnpm (repo používá pnpm workspace)

Instalace (z kořene projektu)

```bash
pnpm install
```

Důležité: pokud se při spouštění skriptu objeví `concurrently: command not found`, je potřeba nainstalovat
`concurrently`:

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

- `vite preview` slouží k otestování "production" buildu lokálně. Bere složku `dist` (výsledek `vite build`) a spouští
  server, který tento statický build servíruje.
- V tomto repo jsou preview-skripty nastaveny takto (příklad ze `packages/shell/package.json`):

  - `concurrently "vite build --watch" "vite preview --port 5173 --strictPort"`
  - To znamená: provádí se průběžná (watch) produkční sestavení do `dist` a zároveň se spustí preview server, který
    servíruje obsah z `dist`.
  - Používá se proto, abyste viděli chování buildu (hashované assets, chování module-federation v produkční podobě) bez
    nutnosti deployovat.

Jak spustit preview z konzole (příklady)

Ve složce `packages/products`:

```bash
pnpm --filter products preview
```

Nebo z kořene (monorepo skript):

```bash
pnpm run all_with_preview
```

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
