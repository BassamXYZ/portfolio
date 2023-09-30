import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Bassam Ahmad personal blog',
    description: 'A personal blog talked about my interests such as programming, math, technology and games',
    site: 'https://bassamahmad.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
  });
}