import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
