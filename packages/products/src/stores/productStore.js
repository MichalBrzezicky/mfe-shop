import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref([]) // state

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
      }, {
        id: 7,
        title: 'Fíkus lyrový (Ficus lyrata)',
        price: 1899,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/7/e/7ed6d5b8de1c561b8aa23ecef29dc245-ficus-lyrata-bambino-12cm-01.png',
        description: 'Velkolistá designová rostlina, oblíbená v moderních interiérech.',
      },
      {
        id: 8,
        title: 'Tchýnin jazyk (Sansevieria)',
        price: 599,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/8/f/8f5f8a7108761801a58c096daa974d77-sansevieria-trifasciata-zeylanica-12cm-01.png',
        description: 'Nenáročná rostlina čistí vzduch a zvládne i horší světelné podmínky.',
      },
      {
        id: 9,
        title: 'Potosovec zlatý (Epipremnum aureum)',
        price: 449,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/5/2/523fa3f852c0bfd0100b57c3f5465543-dsc02462-removebg.png',
        description: 'Rychle rostoucí převislá rostlina vhodná do závěsných květináčů.',
      },
      {
        id: 10,
        title: 'Dracéna marginata',
        price: 1399,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/b/5/b53b8b42821d1b75ba25d846ca9c75f9-dracaena-marginata-24cm-01.png',
        description: 'Elegantní stromková rostlina vhodná do kanceláří i bytů.',
      },
      {
        id: 11,
        title: 'Alokázie Polly',
        price: 1199,
        image: 'https://www.fleur.nl/media/catalog/product/cache/1bdaada4d7caeef0c7b86000b1f0e2db/a/l/alocasia-polly-kunstplant68d920_1.png',
        description: 'Exotická rostlina s výraznými listy, ideální jako solitér.',
      },
      {
        id: 12,
        title: 'Philodendron scandens',
        price: 549,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/3/1/310493ea017710896c2d5b2d3001e225-philodendron-remove.png',
        description: 'Nenáročná popínavá rostlina s jemně srdčitými listy.',
      },
      {
        id: 13,
        title: 'Areka palma',
        price: 1999,
        image: 'https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/6cc9c7ab-f470-4b31-37a4-101512964f00/900px',
        description: 'Vzdušná palma, která prostor opticky zjemní a projasní.',
      },
      {
        id: 14,
        title: 'Pilea peperomioides',
        price: 499,
        image: 'https://zivekytky.s26.cdn-upgates.com/_cache/2/4/24534ea724fa432c19542da4928d3606-pilea-peperomioides-12cm-01.png',
        description: 'Oblíbená „čínská penízková“ rostlina s kulatými listy.',
      },
      {
        id: 15,
        title: 'Fíkus elastica (gumovník)',
        price: 1599,
        image: 'https://zivekytky.s26.cdn-upgates.com/u/u681b4cba0a007-86583018706df3-ficus-elastica-robusta-12cm-01.png',
        description: 'Robustní pokojová rostlina s lesklými tmavými listy.',
      },
    ]
  }

  const fetchRecommendedProducts = async () => {
    // Simulate fetching recommended products
    await fetchProducts()
    products.value = products.value.slice(0, 12)
  }

  return { products, addProduct, fetchProducts, fetchRecommendedProducts }
})
