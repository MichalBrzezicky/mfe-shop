<template>
  <v-footer padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="brand">
            <v-icon left>mdi-leaf</v-icon>
            <strong>Plant Base</strong>
          </div>
          <p class="muted">Nechte svůj domov růst s pečlivě vybranými pokojovými rostlinami.</p>
        </v-col>

        <v-col cols="6" md="3">
          <h6>Obchodní sekce</h6>
          <ul>
            <li>
              <RouterLink to="/products">Pokojové rostliny</RouterLink>
            </li>
            <li>
              <RouterLink to="/products?filter=new">Nově naskladněno</RouterLink>
            </li>
            <li>
              <RouterLink to="/products?filter=sale">Výprodej</RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="3">
          <h6>Naše společnost</h6>
          <ul>
            <li>
              <RouterLink to="/about">O nás</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact">Kontakt</RouterLink>
            </li>
          </ul>
        </v-col>

        <v-col class="text-center mt-6" cols="12">
          <small>Neziskový akademický projekt pro vzdělávací účely. Design a obsah byl vytvořen s
            využitím veřejně dostupných zdrojů a inspirován existujícími e-shopy. Nejedná se o komerční web. </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>

<style scoped>
  .brand {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .muted {
    color: rgba(0, 0, 0, 0.6);
    margin-top: 8px
  }

  v-footer {
    background: transparent
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 8px 0
  }

  li {
    margin: 6px 0
  }

  a {
    color: inherit;
    text-decoration: none
  }
</style>
