import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/tesla_electricidad_web_page/',
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, './src/domain'),
      '@application': path.resolve(__dirname, './src/application'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@presentation': path.resolve(__dirname, './src/presentation'),
      '@components': path.resolve(__dirname, './src/presentation/components'),
      '@sections': path.resolve(__dirname, './src/presentation/sections'),
      '@hooks': path.resolve(__dirname, './src/presentation/hooks'),
      '@layouts': path.resolve(__dirname, './src/presentation/layouts'),
      '@animations': path.resolve(__dirname, './src/presentation/animations'),
      '@styles': path.resolve(__dirname, './src/presentation/styles'),
    },
  },
})
