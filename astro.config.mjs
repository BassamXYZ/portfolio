import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";
// https://astro.build/config
export default defineConfig({
  site: 'https://my-blog-site.netlify.app',
  integrations: [tailwind(), preact(), sitemap({
    entryLimit: 10000,
    changefreq: 'weekly',
    priority: 0.7
    /*serialize(item) {
      if (/exclude-from-sitemap/.test(item.url)) {
        return undefined;
      }
      if (/your-special-page/.test(item.url)) {
        item.changefreq = 'daily';
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      return item;
    },
    i18n: {
      defaultLocale: 'en',   // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US',         // The `defaultLocale` value must present in `locales` keys
        es: 'es-ES',
        fr: 'fr-CA',
      },
    },*/
  }),]
});