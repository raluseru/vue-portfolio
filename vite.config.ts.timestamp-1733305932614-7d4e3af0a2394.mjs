// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///media/mihaela/DATA/personal/proiecte%20pt%20github/vue-portfolio/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbWVkaWEvbWloYWVsYS9EQVRBL3BlcnNvbmFsL3Byb2llY3RlIHB0IGdpdGh1Yi92dWUtcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbWVkaWEvbWloYWVsYS9EQVRBL3BlcnNvbmFsL3Byb2llY3RlIHB0IGdpdGh1Yi92dWUtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tZWRpYS9taWhhZWxhL0RBVEEvcGVyc29uYWwvcHJvaWVjdGUlMjBwdCUyMGdpdGh1Yi92dWUtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKHtuYW1lfSkgPT4ge1xuICAgICAgICAgIGlmICgvXFwuKGdpZnxqcGU/Z3xwbmd8c3ZnKSQvLnRlc3QobmFtZSA/PyAnJykpe1xuICAgICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKC9cXC5jc3MkLy50ZXN0KG5hbWUgPz8gJycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nOyAgIFxuICAgICAgICAgIH1cbiBcbiAgICAgICAgICAvLyBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgLy8gcmVmOiBodHRwczovL3JvbGx1cGpzLm9yZy9ndWlkZS9lbi8jb3V0cHV0YXNzZXRmaWxlbmFtZXNcbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlcsU0FBUyxlQUFlLFdBQVc7QUFFaFosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSjBNLElBQU0sMkNBQTJDO0FBT25SLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFFaEIsZ0JBQWdCLENBQUMsRUFBQyxLQUFJLE1BQU07QUFDMUIsY0FBSSx5QkFBeUIsS0FBSyxRQUFRLEVBQUUsR0FBRTtBQUMxQyxtQkFBTztBQUFBLFVBQ1g7QUFFQSxjQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUUsR0FBRztBQUMzQixtQkFBTztBQUFBLFVBQ1g7QUFJQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
