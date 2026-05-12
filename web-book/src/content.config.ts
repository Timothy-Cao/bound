import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const files = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/files' }),
  schema: z.object({
    title: z.string(),
    fileNumber: z.number().int().positive(),
    year: z.number().int().nullable(),
    sourceLabel: z.string(),
    header: z.string().optional(),
    components: z.array(z.enum(['image', 'sound', 'scent'])).default([]),
    withheld: z.boolean().default(false),
    /** if true, visiting this file forces Class 4 BOUND on the reader's passport */
    binds: z.boolean().default(false),
  }),
});

export const collections = { files };
