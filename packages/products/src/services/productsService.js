import { executeDocument, executeQuery } from './firestoreHelpers.js'
import productsQueryByNewFlag from './queries/productsQueryByNewFlag.js'
import productsQueryByOnSaleFlag from './queries/productsQueryByOnSaleFlag.js'
import productsQueryByRecommendedFlag from './queries/productsQueryByRecommendedFlag.js'
import productsQueryAll from './queries/productsQueryAll.js'
import productsDocById from './queries/productsDocById.js'

export async function getAllProducts(count = null) {
  return executeQuery(productsQueryAll(count))
}

export function getNewProducts(count = null) {
  return executeQuery(productsQueryByNewFlag(count))
}

export function getSaleProducts(count = null) {
  return executeQuery(productsQueryByOnSaleFlag(count))
}

export function getRecommendedProducts(count = null) {
  return executeQuery(productsQueryByRecommendedFlag(count))
}

export function getProductById(id) {
  return executeDocument(productsDocById(id))
}
