import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [dtsPlugin({ outDir: 'dist' }), cssInjectedByJsPlugin()],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: resolve(import.meta.dirname, 'src/index.ts'),
            name: 'simplytoast',
            fileName: 'simply-toast',
        },
    }
})
