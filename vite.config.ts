// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({
        tsconfigPath: './tsconfig.json'
    })],
    build: {
        lib: {
            name: '@meersagor/js-composable',
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'js-composable',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            },
        },
        minify: true,
    },
})