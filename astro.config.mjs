import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://my-blog-site.netlify.app',
  integrations: [tailwind(), sitemap({
    entryLimit: 10000,
    changefreq: 'weekly',
    i18n: {
      defaultLocale: 'ar',
      locales: {
        ar: 'ar',
        en: 'en-US',
      },
    },
  }),]
});