import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: process.env.NUXT_API_SECRET || "123",
    textxiaojie: "小杰",
    // 暴露给客户端使用
    public: {
      apiBase1: process.env.NUXT_API_BASE1 || "http://localhost:3000",
      apiBase2: process.env.NUXT_API_BASE2 || "http://localhost:3000",
      apiBase3: process.env.NUXT_API_BASE3 || "http://localhost:3000",
      apiBase4: process.env.NUXT_API_BASE4 || "http://localhost:3000",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "nuxtjs-naive-ui"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/global.scss";`,
        },
      },
    },
    plugins: [
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
        dts: "types/auto-imports.d.ts", // 可选：自动生成 TypeScript 类型声明
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: "types/components.d.ts", // 可选：自动生成 TypeScript 类型声明
      }),
    ],
  },
  // 国际化配置
  i18n: {
    locales: [
      {
        code: "zhCN",
      },
      {
        code: "zhTW",
      },
      {
        code: "enUS",
      },
    ],
    defaultLocale: "zhCN",
    customRoutes: "page",
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
