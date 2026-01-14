import { getCollection } from './firestoreHelpers.js'

export function getProductsCollection() {
  return getCollection('products')
}
