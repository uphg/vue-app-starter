import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx-babel'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  rules: []
})
