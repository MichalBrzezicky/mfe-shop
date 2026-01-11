<template>
  <div>
    <h2 class="text-h5 mb-4 mx-2">Doporučené plodiny</h2>

    <v-row dense>
      <v-col
        v-for="product in productStore.products"
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
  </div>
</template>

<script setup>
  import { eventBus } from '@shared/core/eventBus'
  import { CART_EVENTS } from '@shared/core/events/CartEventsEnum.js'
  import { onMounted } from 'vue'
  import ProductCard from './ProductCard.vue'
  import { useProductStore } from '../stores/productStore.js'

  const emit = defineEmits(['add-to-cart', 'view-product'])

  const productStore = useProductStore()


  function onAddToCart(product) {
    eventBus.emit(CART_EVENTS.ADD, { product })
  }

  function onViewProduct(productId) {
    emit('view-product', productId)
  }

  onMounted(async () => {
    await productStore.fetchProducts()
  })
</script>
