<template>
  <div>
    <HeroSection class="mb-10" />
    <ProductsList />
  </div>
</template>


<script setup>
  import { defineAsyncComponent } from 'vue'
  import HeroSection from '../components/HeroSection.vue'

  const ProductsList = defineAsyncComponent(
    () => import('products/ProductsList'),
  )
</script>
