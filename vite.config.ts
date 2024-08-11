// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({
      tsconfigPath: './tsconfig.json'
    })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@meersagor/js-composable',
      fileName: 'js-composable',
    }
  },
})