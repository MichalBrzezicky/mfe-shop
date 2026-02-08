<template>
  <ProductsListLayout :products="products" :title="$t('products.components.ProductsOnSaleList.title')" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { getSaleProducts } from '../services/productsService.js'
  import ProductsListLayout from './ProductsListLayout.vue'

  const products = ref([])

  async function fetchOnSaleProducts() {
    products.value = await getSaleProducts(8)
  }

  onMounted(async () => {
    await fetchOnSaleProducts()
  })
</script>
