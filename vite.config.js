import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base './' damit die Seite unter github.io/fairkauf/ läuft (Hash-Router, keine Server-Routen)
export default defineConfig({ base: './', plugins: [tailwindcss()] })
