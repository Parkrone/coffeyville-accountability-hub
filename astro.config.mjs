import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://parker8thompson1.github.io',
  base: '/coffeyville-accountability-hub',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    keystatic()
  ],
});
