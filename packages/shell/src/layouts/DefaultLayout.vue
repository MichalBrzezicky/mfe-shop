<template>
  <v-app class="overflow-x-hidden">
    <HeaderNav />

    <v-main>
      <v-container class="pt-8 pb-12">
        <slot />
      </v-container>
    </v-main>

    <SiteFooter />
  </v-app>
</template>

<script setup>
  import HeaderNav from '../components/HeaderNav.vue'
  import SiteFooter from '../components/SiteFooter.vue'
</script>
