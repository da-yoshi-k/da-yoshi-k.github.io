import { defineCollection, z } from "astro:content";

export const collections = {
  profile: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      handleName: z.string(),
      bio: z.string(),
      skills: z.string(),
    }),
  }),
  links: defineCollection({
    schema: z.object({
      title: z.string(),
      url: z.string().url().optional(),
      description: z.string().optional(),
      order: z.number(),
      faviconDomain: z.string().optional(),
      gaLabel: z.string().optional(),
      actionLabel: z.string().optional(),
      actionUrl: z.string().url().optional(),
      actionGaLabel: z.string().optional(),
      feedType: z.enum(["articles", "github", "none"]).optional(),
    }),
  }),
};
