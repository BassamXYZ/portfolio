import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    url: z.string(),
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({ url: z.string(), alt: z.string() }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    summary: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    role: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    paper: z.string().optional(),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    image: z.object({ url: z.string(), alt: z.string() }),
  }),
});

export const collections = { blog, projects };
