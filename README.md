# Vue App Starter

快速创建单页应用 APP 模板。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)
- 🧩 [组件自动化加载](./src/components)
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
<!-- - 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons) -->
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- ✅ 使用 [Vitest](http://vitest.dev/) 进行单元和组件测试
- 🦾 TypeScript
- 🎲 封装 Mock 方法，方便开发环境 Mock 数据
- 📦 根据路由/依赖库分包打包生产环境

## 预设

### CSS 框架

- [Sass](https://sass-lang.com/)
- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

## 开启 Volar 接管模式（仅针对 VSCode + Volar）

Volar 接管模式的 TypeScript 类型提示性能更高，通过以下步骤启用：

1. 在当前项目的工作空间下，用 `Ctrl + Shift + P` (macOS：`Cmd + Shift + P`) 唤起命令面板。
2. 输入 `built`，然后选择“Extensions：Show Built-in Extensions”。
3. 在插件搜索框内输入 `typescript` (不要删除 `@builtin` 前缀)。
4. 点击“TypeScript and JavaScript Language Features”右下角的小齿轮，然后选择“Disable (Workspace)”。
5. 重新加载工作空间。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。