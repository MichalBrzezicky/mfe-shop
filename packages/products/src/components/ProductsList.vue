<template>
  <ProductsListLayout :products="productStore.products" title="Veškerý sortiment" />
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useProductStore } from '../stores/productStore.js'
  import ProductsListLayout from './ProductsListLayout.vue'

  const productStore = useProductStore()

  onMounted(async () => {
    await productStore.fetchProducts()
  })
</script>
