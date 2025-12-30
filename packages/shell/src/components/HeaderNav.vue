<template>
  <v-app-bar dense elevation="0" flat>
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <RouterLink aria-label="Plant Base home" class="logo" to="/">
            <v-icon left>mdi-leaf</v-icon>
            <span class="logo-text">Plant Base</span>
          </RouterLink>
        </v-col>

        <v-spacer />

        <v-col class="d-none d-md-flex nav-links" cols="auto">
          <v-btn text to="/">Domů</v-btn>
          <v-btn text to="/products">Produkty</v-btn>
          <v-btn text to="/about">O nás</v-btn>
          <v-btn text to="/contact">Kontakt</v-btn>
        </v-col>

        <v-spacer />

        <v-col class="actions" cols="auto">
          <v-btn aria-label="Search" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn aria-label="Account" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <v-badge :content="cartCount" color="primary" overlap>
            <v-btn aria-label="Cart" icon @click="$emit('open-cart')">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  const { cartCount } = defineProps({
    cartCount: { type: Number, default: 0 },
  })
</script>

<style scoped>
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #1f2d2a;
    text-decoration: none;
  }

  .logo-text {
    font-size: 1.05rem;
  }

  .nav-links .v-btn {
    margin: 0 6px;
  }

  .actions {
    display: inline-flex;
    gap: 6px;
    align-items: center;
  }
</style>
