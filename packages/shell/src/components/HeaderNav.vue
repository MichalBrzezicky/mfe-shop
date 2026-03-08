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
          <v-btn v-for="option in navOptions" :key="option.to" :to="option.to" text>
            {{ $t(option.label) }}
          </v-btn>
        </v-col>

        <v-spacer />

        <v-col class="d-inline-flex align-center" cols="auto">
          <LanguageMenu />

          <CartPreviewBtn />

          <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list nav>
      <v-list-item
        v-for="option in navOptions"
        :key="option.to"
        :to="option.to"
        @click="drawer = false"
      >
        {{ $t(option.label) }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { defineAsyncComponent, ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import logo from '../assets/logo.png'
  import LanguageMenu from './LanguageMenu.vue'

  const CartPreviewBtn = defineAsyncComponent(
    () => import('cart/CartPreviewBtn'),
  )

  const drawer = ref(false)

  const navOptions = [
    { to: '/', label: 'shell.navigation.home' },
    { to: '/products', label: 'shell.navigation.products' },
    { to: '/about', label: 'shell.navigation.about' },
    { to: '/contact', label: 'shell.navigation.contact' },
  ]
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
