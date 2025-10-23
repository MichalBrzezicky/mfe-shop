import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
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
                './ProductsList': './src/components/ProductsList.vue',
            },
            shared: ['vue'],
        }),
    ],
    build: {
        target: "esnext",
    },
})
