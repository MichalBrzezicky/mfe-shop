<template>
  <v-app-bar dense elevation="0" flat>
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <RouterLink aria-label="PlantBase" class="logo" to="/">
            <img :src="logo" alt="PlantBase" class="site-logo" />
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

        <v-col class="d-inline-flex align-center" cols="auto">
          <v-btn aria-label="Account" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <CartPreviewBtn />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue'
  import { RouterLink } from 'vue-router'
  import logo from '../assets/logo.png'

  const CartPreviewBtn = defineAsyncComponent(
    () => import('cart/CartPreviewBtn'),
  )
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

  .nav-links .v-btn {
    margin: 0 6px;
  }

  .site-logo {
    height: 40px;
    width: auto;
  }

  @media (max-width: 768px) {
    .site-logo {
      height: 32px;
    }
  }
</style>
