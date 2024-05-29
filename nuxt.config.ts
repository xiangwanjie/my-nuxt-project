import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: process.env.API_SECRET || "123",
    textxiaojie: "小杰",
    // 暴露给客户端使用
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3000",
    },
  },
  modules: ["nuxtjs-naive-ui"],
  vite: {
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
});
