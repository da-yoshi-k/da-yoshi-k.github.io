import { defineCollection, z } from "astro:content";

export const collections = {
  links: defineCollection({
    schema: z.object({
      title: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
      order: z.number(),
      faviconDomain: z.string().optional(),
      gaLabel: z.string().optional(),
      actionLabel: z.string().optional(),
      actionUrl: z.string().url().optional(),
      actionGaLabel: z.string().optional(),
    }),
  }),
};
