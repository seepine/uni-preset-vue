import type { Config } from 'tailwindcss'
import { basePreset, miniprogramBasePreset } from 'tailwind-extensions'
import { isMp, isQuickapp } from '@uni-helper/uni-env'

const presets: Config['presets'] = [basePreset]
if (isMp || isQuickapp) {
  presets.push(miniprogramBasePreset)
}

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  presets,
  corePlugins: {
    preflight: !(isMp || isQuickapp)
  }
}
export default config
