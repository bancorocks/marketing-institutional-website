import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/styles': resolve(__dirname, './src/styles'),
      '@/assets': resolve(__dirname, './src/assets'),
    },
  },
})
