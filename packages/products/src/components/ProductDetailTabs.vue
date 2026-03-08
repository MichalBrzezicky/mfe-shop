<template>
  <div>
    <v-tabs v-model="activeTab" color="primary">
      <v-tab value="description">
        {{ $t('products.components.ProductDetail.tabs.description') }}
      </v-tab>
      <v-tab value="care">
        {{ $t('products.components.ProductDetail.tabs.care') }}
      </v-tab>
    </v-tabs>

    <v-divider />

    <v-tabs-window v-model="activeTab" class="pt-4">
      <v-tabs-window-item value="description">
        <p class="text-body-1">{{ product.description }}</p>
      </v-tabs-window-item>

      <v-tabs-window-item value="care">
        <ProductDetailCareIcons v-if="product.care" :care="product.care" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ProductDetailCareIcons from './ProductDetailCareIcons.vue'

  defineProps({
    product: { type: Object, required: true },
  })

  const activeTab = ref('description')
</script>