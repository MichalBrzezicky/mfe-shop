<template>
  <v-container class="pa-0 ma-0">
    <v-row class="align-center" dense>
      <v-col cols="12" sm="4">
        <h2 v-if="title" class="text-h5 my-4 mx-2">{{ title }}</h2>
      </v-col>
      <v-col v-if="$slots['append']" class="text-right justify-items-end" cols="12" sm="8">
        <slot name="append" />
      </v-col>
    </v-row>

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
  import ProductCard from './ProductCard.vue'

  const { products, title } = defineProps({
    title: {
      type: String,
      default: null,
    },
    products: {
      type: Array,
      required: true,
    },
  })

  const emit = defineEmits(['add-to-cart', 'view-product'])

  function onAddToCart(product) {
    eventBus.emit(CART_EVENTS.ADD, { product })
  }

  function onViewProduct(productId) {
    emit('view-product', productId)
  }
</script>
