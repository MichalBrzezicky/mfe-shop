import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref([]) // state

  const totalPrice = computed(
    () => products.value
      .map(p => p.price)
      .reduce((a, b) => a + b, 0)) // getter

  const addProduct = (product) => {
    products.value.push(product)
  }

  const fetchProducts = async () => {
    products.value = [
      {
        id: 1,
        title: 'Kapradina hnízdová',
        price: 849,
        image: '/src/assets/demo_plant.png',
        description: 'Čistí vzduch. Elegantní rostlina v keramickém květináči.',
      },
      {
        id: 2,
        title: 'Voskovka obovatá (Hoya)',
        price: 649,
        image: '/src/assets/demo_plant.png',
        description:
          'Popínavá rostlina s masitými lesklými listy, vhodná na poličky i do závěsných květináčů.',
      },
      {
        id: 3,
        title: 'Monstera deliciosa',
        price: 2249,
        image: '/src/assets/demo_plant.png',
        description: 'Ikonická rostlina s děrovanými listy, vhodná do světlých interiérů.',
      },
      {
        id: 4,
        title: 'ZZ rostlina (Zamioculcas)',
        price: 1249,
        image: '/src/assets/demo_plant.png',
        description:
          'Odolná rostlina do stínu, téměř nezničitelná — ideální do rušných domácností.',
      },
      {
        id: 5,
        title: 'Strelície královská',
        price: 2499,
        image: '/src/assets/demo_plant.png',
        description: 'Tropické listy, které dodají místnosti výrazný charakter.',
      },
      {
        id: 6,
        title: 'Calathea – Krásná hvězda',
        price: 799,
        image: '/src/assets/demo_plant.png',
        description: 'Dekorační listy s výraznými vzory a jemným pohybem.',
      },
    ]
  }

  return { products, totalPrice, addProduct, fetchProducts }
})
