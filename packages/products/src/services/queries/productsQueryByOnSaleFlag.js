import { query, where } from 'firebase/firestore'
import { getProductsCollection } from '../collections.js'
import { mergeQueryWithLimit } from '../firestoreHelpers.js'

export default function productsQueryByOnSaleFlag(limitCount = null) {
  let q = query(
    getProductsCollection(),
    where('sale', '!=', null),
  )

  if (limitCount) {
    q = mergeQueryWithLimit(q, limitCount)
  }

  return q
}
