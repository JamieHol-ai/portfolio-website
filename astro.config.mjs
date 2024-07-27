import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jamiehol-ai.github.io',
  base: '/portfolio-website',
  integrations: [tailwind(), mdx()],
});