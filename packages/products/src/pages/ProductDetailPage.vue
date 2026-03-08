<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <ProductDetail v-if="product" :product="product" />

        <v-container v-else class="py-6">
          <v-row>
            <v-col cols="12" md="5">
              <v-skeleton-loader type="image" height="480" rounded="lg" />
            </v-col>
            <v-col class="pl-md-8" cols="12" md="7">
              <v-skeleton-loader type="heading" class="mb-2" />
              <v-skeleton-loader type="text" width="40%" class="mb-6" />
              <v-skeleton-loader type="text@4" class="mb-6" />
              <v-skeleton-loader type="heading" width="30%" class="mb-6" />
              <v-skeleton-loader type="button" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { getProductById } from '../services/productsService.js'
  import ProductDetail from '../components/ProductDetail.vue'

  const route = useRoute()

  const product = ref(null)

  async function loadProduct(id) {
    product.value = await getProductById(id)
  }

  watch(
    () => route.params.id,
    (newId) => {
      if (newId) {
        loadProduct(newId)
      }
    },
    { immediate: true },
  )
</script>


