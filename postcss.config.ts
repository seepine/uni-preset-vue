import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcssConfig from './tailwind.config'
import nested from 'tailwindcss/nesting'

const plugins = [
  // 支持嵌套
  nested(),
  tailwindcss({
    config: tailwindcssConfig
  }),
  autoprefixer()
]
export default plugins
