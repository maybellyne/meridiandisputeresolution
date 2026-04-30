import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maybellyne.github.io/meridiandisputeresolution',
  base: '/meridiandisputeresolution',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});