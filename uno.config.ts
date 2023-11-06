import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx-babel'

export default defineConfig({
  content: {
    filesystem: [
      './src/**/*.{html,js,ts,jsx,tsx,vue}',
    ]
  },
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  rules: []
})
