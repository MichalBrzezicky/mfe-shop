<template>
  <ProductsListLayout :products="products" title="Doporučené plodiny" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getRecommendedProducts } from '../services/productsService.js'
  import ProductsListLayout from './ProductsListLayout.vue'

  const products = ref([])

  async function fetchRecommendedProducts() {
    products.value = await getRecommendedProducts(8)
  }

  onMounted(async () => {
    await fetchRecommendedProducts()
  })
</script>
