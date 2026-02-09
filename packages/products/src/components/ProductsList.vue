<template>
  <ProductsListLayout
    :products="productStore.products"
    :title="$t('products.components.ProductsList.title')"
  >
    <template #append>
      <v-btn-toggle v-model="filter" divided>
        <v-btn
          v-for="option in filterOptions"
          :key="option.value"
          :value="option.value"
          class="px-3"
          variant="plain"
        >
          {{ $t(option.label) }}
        </v-btn>
      </v-btn-toggle>
    </template>
  </ProductsListLayout>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { useProductStore } from '../stores/productStore'
  import ProductsListLayout from './ProductsListLayout.vue'

  const productStore = useProductStore()

  const filter = ref('all')

  const filterOptions = [
    { value: 'all', label: 'products.components.ProductsList.filterOptions.all' },
    { value: 'new', label: 'products.components.ProductsList.filterOptions.new' },
    { value: 'sale', label: 'products.components.ProductsList.filterOptions.sale' },
    { value: 'recommended', label: 'products.components.ProductsList.filterOptions.recommended' },
  ]

  watch(filter, (value) => {
    productStore.fetchProducts(value)
  })

  onMounted(() => {
    // get param from Vue router
    productStore.fetchProducts(filter.value)
  })
</script>
