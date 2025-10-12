import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/portfolio/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                index: '/index.html',
                capstone: '/view/capstone.html',
                internship: '/view/internship.html',
            }
        }
    }
})