import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:5002/',
  server: {
    port: 5002,
    origin: 'http://localhost:5002',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    vue(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartView': './src/components/CartView.vue',
      },
      remotes: {
        shell: {
          type: 'module',
          entry: 'http://localhost:5173/remoteEntry.js',
        },
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
