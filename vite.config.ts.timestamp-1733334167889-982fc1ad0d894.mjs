// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import react from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    react()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: ({ names = [] }) => {
          const [name = ""] = names;
          if (/\.(woff2?|ttf)$/i.test(name)) {
            return "fonts/[name]-[hash][extname]";
          } else if (/\.(webp|jpe?g|png)$/i.test(name)) {
            return "images/[name]-[hash][extname]";
          }
          return "[name]-[hash][extname]";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvbWloYWVsYS9EQVRBL3BlcnNvbmFsL3Byb2llY3RlIHB0IGdpdGh1Yi92dWUtcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbWVkaWEvbWloYWVsYS9EQVRBL3BlcnNvbmFsL3Byb2llY3RlIHB0IGdpdGh1Yi92dWUtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tZWRpYS9taWhhZWxhL0RBVEEvcGVyc29uYWwvcHJvaWVjdGUlMjBwdCUyMGdpdGh1Yi92dWUtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICAgIHJlYWN0KClcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICByb2xsdXBPcHRpb25zOntcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKHsgbmFtZXMgPSBbXSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgW25hbWUgPSAnJ10gPSBuYW1lcztcbiAgXG4gICAgICAgICAgaWYgKC9cXC4od29mZjI/fHR0ZikkL2kudGVzdChuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuICdmb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9cXC4od2VicHxqcGU/Z3xwbmcpJC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2VzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgcmV0dXJuICdbbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlcsU0FBUyxlQUFlLFdBQVc7QUFDaFosT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUowTSxJQUFNLDJDQUEyQztBQU9uUixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWM7QUFBQSxNQUNaLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTTtBQUNsQyxnQkFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJO0FBRXBCLGNBQUksbUJBQW1CLEtBQUssSUFBSSxHQUFHO0FBQ2pDLG1CQUFPO0FBQUEsVUFDVCxXQUFXLHVCQUF1QixLQUFLLElBQUksR0FBRztBQUM1QyxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
