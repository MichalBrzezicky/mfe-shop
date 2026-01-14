<template>
  <div>
    <HeroSection class="mb-10" />
    <RecommendedProductsList class="my-2" />
    <ProductsOnSaleList class="my-2" />
  </div>
</template>


<script setup>
  import { defineAsyncComponent } from 'vue'
  import HeroSection from '../components/HeroSection.vue'

  const RecommendedProductsList = defineAsyncComponent(
    () => import('products/RecommendedProductsList'),
  )

  const ProductsOnSaleList = defineAsyncComponent(
    () => import('products/ProductsOnSaleList'),
  )
</script>
