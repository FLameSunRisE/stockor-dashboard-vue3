import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
//auto import element-plus has some issue
import Components from "unplugin-vue-components/vite";
//auto import vue https://www.npmjs.com/package/unplugin-auto-import
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //https://github.com/antfu/unplugin-auto-import/blob/HEAD/src/types.ts
    Components({
      resolvers: [
        // on-demand element-plus has some issue
        //  ElementPlusResolver({
        //    importStyle: 'sass'
        //  })
        // import icons
        // https://github.com/antfu/unplugin-icons
        // IconsResolver(),
      ],
    }),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        // "pinia",
        "vue-router",
        {
          "@/hooks/global/useCommon": ["useCommon"],
          "@/hooks/global/useElement": ["useElement"],
          "@/hooks/global/useVueRouter": ["useVueRouter"],
          "@/utils/axiosReq": ["axiosReq"],
        },
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true, //auto generation auto-imports.d.ts file
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": `${pathSrc}/`,
      // "@/": `${pathSrc}/`,
    },
  },
});
