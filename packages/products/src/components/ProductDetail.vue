<template>
  <v-container class="py-6">
    <!-- Hero row: image + info -->
    <v-row>
      <v-col cols="12" md="5">
        <ProductDetailMedia :product="product" />
      </v-col>

      <v-col class="pl-md-8" cols="12" md="7">
        <ProductDetailInfo :product="product" />
      </v-col>
    </v-row>

    <!-- Tabs + FAQ row -->
    <v-row class="mt-8">
      <v-col cols="12" md="7">
        <ProductDetailTabs :product="product" />
      </v-col>

      <v-col class="pl-md-8" cols="12" md="5">
        <ProductDetailFAQ />
      </v-col>
    </v-row>

    <v-divider class="my-8" />

    <RecommendedProductsList />
  </v-container>
</template>

<script setup>
  import ProductDetailMedia from './ProductDetailMedia.vue'
  import ProductDetailInfo from './ProductDetailInfo.vue'
  import ProductDetailTabs from './ProductDetailTabs.vue'
  import ProductDetailFAQ from './ProductDetailFAQ.vue'
  import RecommendedProductsList from './RecommendedProductsList.vue'

  defineProps({
    product: { type: Object, required: true },
  })
</script>
