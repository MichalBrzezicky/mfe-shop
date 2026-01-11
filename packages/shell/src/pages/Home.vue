<template>
  <div>
    <HeroSection class="mb-10" />
    <RecommendedProductsList />
  </div>
</template>


<script setup>
  import { defineAsyncComponent } from 'vue'
  import HeroSection from '../components/HeroSection.vue'

  const RecommendedProductsList = defineAsyncComponent(
    () => import('products/RecommendedProductsList'),
  )
</script>
