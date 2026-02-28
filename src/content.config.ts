import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const packages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/packages' }),
  schema: z.object({
    name: z.string(),
    name_ar: z.string().optional(),
    tagline: z.string(),
    tagline_ar: z.string().optional(),
    price: z.number().optional(),
    price_suffix: z.string().optional(),
    color: z.enum(['green', 'blue', 'purple', 'gold']),
    is_popular: z.boolean().default(false),
    is_custom: z.boolean().default(false),
    order: z.number(),
    focus: z.string(),
    focus_ar: z.string().optional(),
    features: z.array(z.string()),
    features_ar: z.array(z.string()).optional(),
    support_days: z.number().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    site_title: z.string(),
    hero_headline: z.string(),
    hero_subheadline: z.string(),
    discount_percentage: z.number().default(25),
    show_discount: z.boolean().default(true),
    discount_label: z.string().default('Special Launch Offer'),
    contact_email: z.string().optional(),
    contact_whatsapp: z.string().optional(),
    cta_url: z.string().optional(),
    cta_label: z.string().default('Book Free Strategy Call'),
  }),
});

export const collections = { packages, settings };
