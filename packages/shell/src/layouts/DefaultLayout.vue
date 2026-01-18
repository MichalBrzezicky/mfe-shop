<template>
  <v-app class="overflow-x-hidden">
    <HeaderNav :cartCount="cartCount" @open-cart="onOpenCart" />

    <v-main>
      <v-container class="pt-8 pb-12">
        <slot />
      </v-container>
    </v-main>

    <SiteFooter />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import HeaderNav from '../components/HeaderNav.vue'
  import SiteFooter from '../components/SiteFooter.vue'

  const cartCount = ref(0)

  function onOpenCart() {
    // emit event up or open local drawer
    console.log('open cart requested')
  }
</script>
