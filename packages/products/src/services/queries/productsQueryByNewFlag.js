import { query, where } from 'firebase/firestore'
import { getProductsCollection } from '../collections.js'
import { mergeQueryWithLimit } from '../firestoreHelpers.js'

export default function productsQueryByNewFlag(limitCount = null) {
  let q = query(
    getProductsCollection(),
    where('isNew', '==', true),
  )

  // q = mergeQueryWithSort(q, 'created', 'desc')

  if (limitCount) {
    q = mergeQueryWithLimit(q, limitCount)
  }

  return q
}
