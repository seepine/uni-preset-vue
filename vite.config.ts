import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslint(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ['src/components']
    })
  ],
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
})
