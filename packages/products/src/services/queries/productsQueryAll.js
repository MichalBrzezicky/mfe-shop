import { query } from 'firebase/firestore'
import { getProductsCollection } from '../collections.js'
import { mergeQueryWithLimit } from '../firestoreHelpers.js'

export default function productsQueryAll(limitCount = null) {
  let q = query(
    getProductsCollection(),
  )

  if (limitCount) {
    q = mergeQueryWithLimit(q, limitCount)
  }

  return q
}
