import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 5002,
        origin: 'http://localhost:5002',
    },
    plugins: [
        vue(),
        federation({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartView': './src/components/CartView.vue',
            },
            shared: ['vue'],
        }),
    ],
    build: {
        target: "esnext",
    },
})
