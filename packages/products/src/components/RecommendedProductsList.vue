<template>
  <v-container class="pa-0 ma-0">
    <h2 class="text-h5 mb-4 mx-2">Doporučené plodiny</h2>

    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
      >
        <ProductCard
          :product="product"
          @add-to-cart="onAddToCart(product)"
          @view-product="onViewProduct"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { eventBus } from '@shared/core/eventBus'
  import { CART_EVENTS } from '@shared/core/events/CartEventsEnum.js'
  import { onMounted, ref } from 'vue'
  import ProductCard from './ProductCard.vue'
  import { getRecommendedProducts } from '../services/productsService.js'

  const emit = defineEmits(['add-to-cart', 'view-product'])

  const products = ref([])


  function onAddToCart(product) {
    eventBus.emit(CART_EVENTS.ADD, { product })
  }

  function onViewProduct(productId) {
    emit('view-product', productId)
  }

  async function fetchRecommendedProducts() {
    products.value = await getRecommendedProducts(8)
  }

  onMounted(async () => {
    await fetchRecommendedProducts()
  })
</script>
