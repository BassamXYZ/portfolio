import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bassamahmad.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      entryLimit: 10000,
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ar: "ar",
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
