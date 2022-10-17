import react from '@vitejs/plugin-react'
import {resolve} from "path";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'EMSE-UI',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react-router-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});