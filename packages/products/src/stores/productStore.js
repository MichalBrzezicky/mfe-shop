import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllProducts, getNewProducts, getRecommendedProducts, getSaleProducts } from '../services/productsService.js'

export const useProductStore = defineStore('products', () => {
  const products = ref([]) // state

  const addProduct = (product) => {
    products.value.push(product)
  }

  const fetchProducts = async (filter) => {
    switch (filter) {
      case 'recommended':
        return fetchRecommendedProducts()
      case 'sale':
        return fetchProductsInSale()
      case 'new':
        return fetchNewProducts()
      default:
        return fetchAllProducts()
    }
  }

  const fetchAllProducts = async () => {
    products.value = await getAllProducts()
  }

  const fetchRecommendedProducts = async () => {
    products.value = await getRecommendedProducts()
  }

  const fetchProductsInSale = async () => {
    products.value = await getSaleProducts()
  }

  const fetchNewProducts = async () => {
    products.value = await getNewProducts()
  }

  return { products, fetchAllProducts, fetchProducts, fetchRecommendedProducts, fetchNewProducts, fetchProductsInSale }
})
