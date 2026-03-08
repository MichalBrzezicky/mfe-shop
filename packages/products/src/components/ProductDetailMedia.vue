<template>
  <div class="product-media">
    <v-img
      :src="product.image"
      :alt="product.title"
      aspect-ratio="1"
      class="rounded-lg bg-grey-lighten-4"
      contain
      max-height="480"
    />

    <div v-if="isOnSale || isNew" class="badges">
      <v-chip v-if="isOnSale" class="mr-2" color="red-lighten-1" variant="flat">
        {{ $t('products.components.ProductCard.chips.sale') }}
      </v-chip>
      <v-chip v-if="isNew" color="green-lighten-1" variant="flat">
        {{ $t('products.components.ProductCard.chips.new') }}
      </v-chip>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    product: { type: Object, required: true },
  })

  const isOnSale = computed(() => !!props.product.sale)
  const isNew = computed(() => !!props.product.isNew)
</script>

<style scoped>
  .product-media {
    position: relative;
  }

  .badges {
    position: absolute;
    top: 12px;
    left: 12px;
  }
</style>