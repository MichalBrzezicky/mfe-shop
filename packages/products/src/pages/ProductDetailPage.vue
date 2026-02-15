<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <ProductDetail
          v-if="product" :product="product"
        />

        <!-- TODO skeleton loader... -->
        <v-progress-circular
          v-else
          color="primary"
          indeterminate
        />
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
    console.log('Product loaded:', product.value)
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


