import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './src/assets') + '/[!.]*', 
          dest: './src/assets/',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions:{
      output: {
        assetFileNames: ({ names = [] }) => {
          const [name = ''] = names;
  
          if (/\.(woff2?|ttf)$/i.test(name)) {
            return 'fonts/[name]-[hash][extname]';
          } else if (/\.(webp|jpe?g|png)$/i.test(name)) {
            return 'images/[name]-[hash][extname]';
          }
  
          return '[name]-[hash][extname]';
        },
      },
    }
  },
})
