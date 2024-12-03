/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/styles.css";',
      },
    },
  },
  plugins: [analog({
    prerender: {
      routes: ['/', '/blog', {
        contentDir: 'src/content/posts',
        transform: (file: PrerenderContentFile) =>{
          return `/blog/${file.name}`
        }
      }]
    }
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
