<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<script>
  import DefaultLayout from './layouts/DefaultLayout.vue'
  import { RouterView } from 'vue-router'

  export default {
    name: 'App',
    components: { DefaultLayout, RouterView },
  }
</script>

<style>
  /* global app-level styles could stay in ./style.css */
</style>
