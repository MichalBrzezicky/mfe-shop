import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    base: '/',
    server: {
      port: 5173,
    },
    plugins: [
      vue(),
      federation({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          products: {
            name: 'products',
            type: 'module',
            entry: env.VITE_PRODUCTS_REMOTE,
          },
          cart: {
            name: 'cart',
            type: 'module',
            entry: env.VITE_CART_REMOTE,
          },
        },
        skipPreload: true,
        exposes: {
          './pinia': './src/plugins/pinia.js',
          './firebase': './src/firebase/firebase.js',
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
    },
  }
})
