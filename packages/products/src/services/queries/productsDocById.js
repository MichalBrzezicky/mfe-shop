import { doc } from 'firebase/firestore'
import { getProductsCollection } from '../collections.js'

export default function productsDocById(id) {
  return doc(getProductsCollection(), String(id))
}

