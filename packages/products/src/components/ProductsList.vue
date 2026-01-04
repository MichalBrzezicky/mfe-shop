<template>
  <div>
    <h2 class="text-h5 mb-4">Doporučené plodiny</h2>

    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
      >
        <ProductCard
          :product="product"
          @add-to-cart="onAddToCart"
          @view-product="onViewProduct"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ProductCard from './ProductCard.vue'

  const products = ref([
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
  ])

  function onAddToCart(productId) {
    console.log('Add to cart', productId)
  }

  function onViewProduct(productId) {
    console.log('View product', productId)
  }
</script>
