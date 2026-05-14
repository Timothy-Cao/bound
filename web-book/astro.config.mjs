import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
    },
  },
  markdown: {
    smartypants: true,
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
