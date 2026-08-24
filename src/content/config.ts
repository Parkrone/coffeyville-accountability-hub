import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    dayNumber: z.number().int().positive(),
    title: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string(),
    videoUrl: z.string().url().optional(),
    location: z.string().default('Coffeyville, KS'),
    tags: z.array(z.string()).default([]),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    ).default([]),
  }),
});

const records = defineCollection({
  type: 'content',
  schema: z.object({
    trackingId: z.string(),
    title: z.string(),
    agency: z.string(),
    requestDate: z.coerce.date(),
    receivedDate: z.coerce.date().optional(),
    status: z.enum(['Requested', 'Partially Fulfilled', 'Fulfilled', 'Denied', 'In Litigation']),
    documentPdfUrl: z.string().optional(),
    exemptionClaimed: z.string().optional(),
    keyFindingsSummary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    eventDate: z.coerce.date(),
    milestoneTitle: z.string(),
    category: z.enum(['Campaign Demand', 'City Action', 'Regulatory Milestone', 'Regional Precedent']),
    topic: z.enum(['Ratepayer Protection', 'Water & Endangered Species', 'Zoning & Moratorium', 'Air & Noise']),
    actor: z.string(),
    demandMet: z.boolean().default(false),
    sourceLink: z.string().url().optional(),
  }),
});

export const collections = {
  videos,
  records,
  timeline,
};
