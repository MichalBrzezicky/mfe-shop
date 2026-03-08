<template>
  <ProductsCarousel :products="products" :title="$t('products.components.RecommendedProductsList.title')" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getRecommendedProducts } from '../services/productsService.js'
  import ProductsCarousel from './ProductsCarousel.vue'

  const products = ref([])

  onMounted(async () => {
    products.value = await getRecommendedProducts(12)
  })
</script>
