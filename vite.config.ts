import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import * as NativeUI from 'naive-ui'

const naiveUIComponentNames = getNaiveUIComponentNames()

function getNaiveUIComponentNames() {
  const exportKeys = Object.keys(NativeUI)
  return exportKeys.filter((item) => /^N/.test(item))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        'vue', 'vue-router',
        {
          'naive-ui': naiveUIComponentNames.concat(['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'])
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/components', 'src/hooks', 'src/stores', 'src/shared'],
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    Components({
      dts: 'src/components.d.ts',
      // 自动导入组件的目录
      dirs: ['src/components'],
      // 自动导入支持的后缀类型
      extensions: ['vue', 'tsx'],
      resolvers: [NaiveUiResolver()],
      // 可使用自动导入的文件后缀类型
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
