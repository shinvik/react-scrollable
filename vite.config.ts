import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import removeTestIdAttribute from 'rollup-plugin-jsx-remove-attributes';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    libInjectCss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      bundleTypes: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/scrollable.tsx'),
      name: 'react-scrollable',
    },
    copyPublicDir: false,
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        removeTestIdAttribute({
          attributes: ['data-testid'],
          environments: ['production'],
        }),
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': '_jsx_runtime',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
