import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:5001/',
  server: {
    port: 5001,
    origin: 'http://localhost:5001',
  },
  plugins: [
    vue(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsList': './src/components/ProductsList.vue', // TODO remove later
        './ProductsPage': './src/pages/ProductsPage.vue',
        './ProductDetailPage': './src/pages/ProductDetailPage.vue',
      },
      shared: {
        vue: { singleton: true },
        pinia: { singleton: true },
        vuetify: { singleton: true },
        'vue-router': { singleton: true },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
})
