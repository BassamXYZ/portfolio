import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://bassamahmad.netlify.app',
  integrations: [tailwind(), sitemap({
    entryLimit: 10000,
    i18n: {
      defaultLocale: 'ar',
      locales: {
        ar: 'ar',
        en: 'en-US',
      },
    },
  }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});