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
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/d/c/dc81697117aa8e607661af1f330f49d6-asplenium-nidus-crispy-wave-12-m-01.png',
        description: 'Čistí vzduch. Elegantní rostlina v keramickém květináči.',
      },
      {
        id: 2,
        title: 'Voskovka obovatá (Hoya)',
        price: 649,
        image: 'https://plantsome.ca/cdn/shop/products/hoya2.png?v=1648581026&width=630',
        description:
          'Popínavá rostlina s masitými lesklými listy, vhodná na poličky i do závěsných květináčů.',
      },
      {
        id: 3,
        title: 'Monstera deliciosa',
        price: 2249,
        image: 'https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/609c2c3f-fd09-4b38-3859-9ee5a570ca00/900px',
        description: 'Ikonická rostlina s děrovanými listy, vhodná do světlých interiérů.',
      },
      {
        id: 4,
        title: 'ZZ rostlina (Zamioculcas)',
        price: 1249,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/2/5/252a0e51f7adac13ccaaffea562431af-zamioculcas-zenzi-14cm-01.png',
        description:
          'Odolná rostlina do stínu, téměř nezničitelná — ideální do rušných domácností.',
      },
      {
        id: 5,
        title: 'Strelície královská',
        price: 2499,
        image: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-indoor-plants-bird-of-paradise-strelitzia-reginae-in-a-white-pot-png-image_13051295.png',
        description: 'Tropické listy, které dodají místnosti výrazný charakter.',
      },
      {
        id: 6,
        title: 'Calathea – Krásná hvězda',
        price: 799,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/2/4/24988a8112d072f0087570ec54b2b673-calathea-beauty-star-cm-01.png',
        description: 'Dekorační listy s výraznými vzory a jemným pohybem.',
      },
    ]
  }

  return { products, totalPrice, addProduct, fetchProducts }
})
