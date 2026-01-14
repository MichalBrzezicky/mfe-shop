<template>
  <v-card
    :color="'#f1f1f1'"
    class="product-card"
    elevation="0"
    rounded="lg"
    variant="flat"
    @click="emit('view-product', product.id)"
  >
    <v-img
      :src="product.image"
      alt="product image"
      class="product-image"
      height="240"
    />

    <v-row
      v-if="isOnSale"
      align="center"
      class="fill-height ma-0"
      justify="center"
      style="position: absolute; top: 10px; left: 10px; display: block"
    >
      <v-chip class="text-subtitle-1" color="red-lighten-1" variant="flat">Výprodej</v-chip>
    </v-row>


    <v-card-title class="text-h6">
      {{ product.title }}
    </v-card-title>

    <v-card-text class="py-0">
      <div class="text-body-2 text-medium-emphasis text-truncate">
        {{ product.description }}
      </div>
    </v-card-text>

    <v-card-actions class="justify-space-between align-center px-3">
      <v-btn
        v-if="showAddToCart"
        class="pa-0"
        color="primary"
        @click.stop="emit('add-to-cart', product.id)"
      >
        <v-icon class="ml-1" icon="mdi-cart-plus" left />
        Přidat do košíku
      </v-btn>
      <v-container class="ma-0 pa-0 text-right">
        <v-row class="ma-0 pa-0" no-gutters>
          <v-col :class="isOnSale ? 'text-decoration-line-through text-caption' : ''" class="ma-0 pa-0" cols="12">
            {{ formattedPrice }}
          </v-col>
          <v-col class="ma-0 pa-0" cols="12">{{ formattedSalePrice }}</v-col>
        </v-row>
      </v-container>

    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'

  const { product, showAddToCart } = defineProps({
    product: {
      type: Object,
      required: true,
    },
    showAddToCart: {
      type: Boolean,
      default: true,
    },
  })

  const emit = defineEmits(['view-product', 'add-to-cart'])

  const isOnSale = computed(() => {
    return !!product.sale
  })

  const formattedSalePrice = computed(() => {
    if (!isOnSale.value) {
      return null
    }

    const salePrice = product.sale ?? 0

    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(salePrice)
  })

  const formattedPrice = computed(() => {
    const price = product.price ?? 0

    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(price)
  })
</script>

<style scoped>
  .product-image {
    background-color: #f7f7f7;
  }

  .product-card {
    border-radius: 12px;
  }

  .text-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
