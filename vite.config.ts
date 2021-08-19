import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
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
    vue({
      script: {
        refSugar: true
      }
    }),
  ],
})
