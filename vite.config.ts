import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [resolve(__dirname, 'src/css/variables.styl')],
      },
    },
  },
  plugins: [
    vue(),
  ],
})
