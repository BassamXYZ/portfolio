import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({url: z.string(), alt: z.string()}),
  })
});

export const collections = {
  'blog': blogCollection,
};