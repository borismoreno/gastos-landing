// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://polite-salmiakki-0d0649.netlify.app/',
  integrations: [preact()]
});