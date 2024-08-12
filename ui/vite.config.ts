import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/ui', replacement: path.resolve(__dirname, './src/') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @use "@/ui/styles/index" as *;
        `,
      },
    },
  },
})
