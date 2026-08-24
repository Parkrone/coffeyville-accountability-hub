import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: process.env.NODE_ENV === 'production' ? 'github' : 'local',
    repo: {
      owner: 'parker8thompson1',
      name: 'coffeyville-accountability-hub',
    },
  },
  collections: {
    videos: collection({
      label: 'Daily Video Logs',
      slugField: 'title',
      path: 'src/content/videos/*',
      format: { contentField: 'content' },
      schema: {
        dayNumber: fields.integer({ label: 'Day Number (e.g. 28)' }),
        title: fields.slug({ name: { label: 'Video Title' } }),
        publishDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        summary: fields.text({ label: 'Short Summary / Caption', multiline: true }),
        videoUrl: fields.url({ label: 'Video / Embed URL' }),
        location: fields.text({ label: 'Filming Location', defaultValue: 'Coffeyville, KS' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        sources: fields.array(
          fields.object({
            name: fields.text({ label: 'Source Name' }),
            url: fields.url({ label: 'Source URL' }),
          }),
          { label: 'Cited Sources', itemLabel: props => props.fields.name.value || 'Source' }
        ),
        content: fields.document({
          label: 'Teleprompter Script / Full Text',
          formatting: true,
        }),
      },
    }),
    records: collection({
      label: 'Public Records (KORA/FOIA)',
      slugField: 'trackingId',
      path: 'src/content/records/*',
      format: { contentField: 'content' },
      schema: {
        trackingId: fields.slug({ name: { label: 'Tracking ID (e.g. KORA-2026-001)' } }),
        title: fields.text({ label: 'Document Title' }),
        agency: fields.text({ label: 'Target Agency' }),
        requestDate: fields.date({ label: 'Request Date' }),
        receivedDate: fields.date({ label: 'Received Date' }),
        status: fields.select({
          label: 'Request Status',
          options: [
            { label: 'Requested', value: 'Requested' },
            { label: 'Partially Fulfilled', value: 'Partially Fulfilled' },
            { label: 'Fulfilled', value: 'Fulfilled' },
            { label: 'Denied', value: 'Denied' },
            { label: 'In Litigation', value: 'In Litigation' },
          ],
          defaultValue: 'Requested',
        }),
        documentPdfUrl: fields.text({ label: 'PDF Path (/records/filename.pdf)' }),
        keyFindingsSummary: fields.text({ label: 'Key Findings Summary', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        content: fields.document({
          label: 'Full Document Analysis & Notes',
          formatting: true,
        }),
      },
    }),
    timeline: collection({
      label: 'Accountability Timeline',
      slugField: 'milestoneTitle',
      path: 'src/content/timeline/*',
      format: { contentField: 'content' },
      schema: {
        milestoneTitle: fields.slug({ name: { label: 'Milestone Title' } }),
        eventDate: fields.date({ label: 'Event Date' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Campaign Demand', value: 'Campaign Demand' },
            { label: 'City Action', value: 'City Action' },
            { label: 'Regulatory Milestone', value: 'Regulatory Milestone' },
            { label: 'Regional Precedent', value: 'Regional Precedent' },
          ],
          defaultValue: 'Campaign Demand',
        }),
        topic: fields.select({
          label: 'Topic',
          options: [
            { label: 'Ratepayer Protection', value: 'Ratepayer Protection' },
            { label: 'Water & Endangered Species', value: 'Water & Endangered Species' },
            { label: 'Zoning & Moratorium', value: 'Zoning & Moratorium' },
            { label: 'Air & Noise', value: 'Air & Noise' },
          ],
          defaultValue: 'Zoning & Moratorium',
        }),
        actor: fields.text({ label: 'Actor / Responsible Entity' }),
        demandMet: fields.checkbox({ label: 'Demand Met by City?' }),
        sourceLink: fields.url({ label: 'Evidence / Source Link' }),
        content: fields.document({
          label: 'Details & Context',
          formatting: true,
        }),
      },
    }),
  },
});
