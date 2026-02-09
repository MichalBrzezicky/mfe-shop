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
  import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useProductStore } from '../stores/productStore'
  import ProductsListLayout from './ProductsListLayout.vue'
  import { PRODUCT_FILTER } from '@shared/core/src/enums/productFilterEnum.js'

  const productStore = useProductStore()
  const route = useRoute()
  const router = useRouter()

  const filter = ref(PRODUCT_FILTER.ALL)

  const filterOptions = [
    { value: PRODUCT_FILTER.ALL, label: 'products.components.ProductsList.filterOptions.all' },
    { value: PRODUCT_FILTER.NEW, label: 'products.components.ProductsList.filterOptions.new' },
    { value: PRODUCT_FILTER.SALE, label: 'products.components.ProductsList.filterOptions.sale' },
    { value: PRODUCT_FILTER.RECOMMENDED, label: 'products.components.ProductsList.filterOptions.recommended' },
  ]

  watch(
    () => route.query.filter,
    (value) => {
      filter.value = typeof value === 'string' ? value : PRODUCT_FILTER.ALL
      productStore.fetchProducts(filter.value)
    },
    { immediate: true },
  )

  watch(filter, (value) => {
    router.replace({
      query: { ...route.query, filter: value },
    })
  })
</script>
