import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    base: './',
    server: {
      port: 5002,
    },
    plugins: [
      vue(),
      federation({
        name: 'cart',
        filename: 'remoteEntry.js',
        exposes: {
          './CartView': './src/components/CartView.vue',
          './cartEventHandlers': './src/integrations/cartEventHandlers.js',
          './CartPreviewBtn': './src/components/CartPreviewBtn.vue',
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
          vuetify: { singleton: true },
          'vue-router': { singleton: true },
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
