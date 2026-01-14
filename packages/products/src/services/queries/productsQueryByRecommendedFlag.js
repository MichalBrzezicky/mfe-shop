import { query, where } from 'firebase/firestore'
import { getProductsCollection } from '../collections.js'
import { mergeQueryWithLimit } from '../firestoreHelpers.js'

export default function productsQueryByRecommendedFlag(limitCount = null) {
  let q = query(
    getProductsCollection(),
    where('isRecommended', '==', true),
  )

  if (limitCount) {
    q = mergeQueryWithLimit(q, limitCount)
  }

  return q
}
