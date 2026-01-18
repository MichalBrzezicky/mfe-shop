import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    base: './',
    server: {
      port: 5001,
    },
    plugins: [
      vue(),
      federation({
        name: 'products',
        filename: 'remoteEntry.js',
        exposes: {
          './ProductsPage': './src/pages/ProductsPage.vue',
          './ProductDetailPage': './src/pages/ProductDetailPage.vue',
          './RecommendedProductsList': './src/components/RecommendedProductsList.vue',
          './ProductsOnSaleList': './src/components/ProductsOnSaleList.vue',
          './productEventHandlers': './src/integrations/productEventHandlers.js',
        },
        skipPreload: true,
        remotes: {
          shell: {
            type: 'module',
            entry: env.VITE_SHELL_REMOTE,
          },
        },
        shared: {
          vue: { singleton: true },
          pinia: { singleton: true },
          'vue-router': { singleton: true },
          firebase: { singleton: true },
          'firebase/app': { singleton: true },
          'firebase/firestore': { singleton: true },
        },
      }),
    ],
    build: {
      target: 'esnext',
      modulePreload: false,
      cssCodeSplit: false,
    },
  }
})
