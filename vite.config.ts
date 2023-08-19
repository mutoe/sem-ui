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
  build: {
    target: 'modules',
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SemUI',
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/vue-fontawesome', '@fortawesome/free-solid-svg-icons'],
      output: [
        {
          format: 'es',
          dir: 'build/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'build/cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
  plugins: [
    vue(),
  ],
})
