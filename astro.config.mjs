// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO(client): domini definitiu
  site: 'https://www.bussinetsdecuina.cat',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('avis-legal') && !page.includes('aviso-legal'),
      i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES' } },
    }),
  ],
});
