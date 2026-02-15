<template>

  <v-card v-if="product">
    <v-card-title>
      Produkt #ID {{ product }}
      {{ product.title }}
    </v-card-title>

    <v-card-text>
      {{ product.description }}
    </v-card-text>
  </v-card>

  <v-progress-circular
    v-else
    color="primary"
    indeterminate
  />
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { getProductById } from '../services/productsService.js'

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


