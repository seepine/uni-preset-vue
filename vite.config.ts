import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import eslint from 'vite-plugin-eslint'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import postcssPlugins from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uniTailwind(),
    eslint(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'uni-app'],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dts: 'src/components.d.ts',
      dirs: ['src/components']
    })
  ],
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
})
