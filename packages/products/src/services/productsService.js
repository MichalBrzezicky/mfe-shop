import { collection, getDocs } from 'firebase/firestore'
const { db } = await import('shell/firebase')

export async function getAllProducts() {
  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map((doc) => doc.data())
}
