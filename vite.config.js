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
                profile: resolve(__dirname, 'profile.html'),
                project: resolve(__dirname, 'project.html'),
                skill: resolve(__dirname, 'skill.html')
            }
        }
    }
})