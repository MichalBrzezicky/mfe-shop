import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllProducts, getNewProducts, getRecommendedProducts, getSaleProducts } from '../services/productsService.js'

export const useProductStore = defineStore('products', () => {
  const products = ref([]) // state

  const addProduct = (product) => {
    products.value.push(product)
  }

  const fetchProducts = async () => {
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

  return { products, fetchProducts, fetchRecommendedProducts, fetchNewProducts, fetchProductsInSale }
})
