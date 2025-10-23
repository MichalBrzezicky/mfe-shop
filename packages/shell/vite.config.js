import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 5173,
    },
    plugins: [
        vue(),
        federation({
            name: 'shell',
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
            shared: ["vue"]
        })
    ],
    build: {
        target: "esnext",
    },
})
