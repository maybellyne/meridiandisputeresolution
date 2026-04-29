import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://meridiandisputeresolution.ca',
  output: 'static',
  trailingSlash: 'never',

  integrations: [
    sitemap(),
  ],
});