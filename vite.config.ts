import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  resolve: {
    alias: {
      assets: '/src/assets',
      enums: '/src/enums',
      navigation: '/src/navigation',
      store: '/src/store',
      screens: '/src/screens',
      services: '/src/services',
      shared: '/src/shared',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
})
