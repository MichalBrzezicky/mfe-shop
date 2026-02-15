import { collection, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from 'shell/firebase'

export function getCollection(collectionName) {
  return collection(db, collectionName)
}

export async function executeQuery(q) {
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => doc.data())
}

export async function executeDocument(docRef) {
  const snapshot = await getDoc(docRef)
  return snapshot.exists() ? snapshot.data() : null
}

export function mergeQueryWithLimit(q, count) {
  return count ? query(q, limit(count)) : q
}

export function mergeQueryWithSort(q, field, direction = 'desc') {
  return field ? query(q, orderBy(field, direction)) : q
}
