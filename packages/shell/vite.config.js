import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:5173/',
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
          entry: 'http://localhost:5001/remoteEntry.js',
        },
        cart: {
          name: 'cart',
          type: 'module',
          entry: 'http://localhost:5002/remoteEntry.js',
        },
      },
      exposes: {
        './pinia': './src/plugins/pinia.js',
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
