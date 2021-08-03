export default {
  name: 'createMethodologyPage',
  type: 'document',
  title: 'Create Methodology Page',
  __experimental_actions: ['update', /*'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'stepCardSection',
      type: 'stepCardSection',
      title: 'Step Card Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'outcomeSection',
      type: 'heroSection',
      title: 'Outcome Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'outcomes',
      type: 'array',
      title: 'Ecological Outcomes',
      of: [{ type: 'reference', to: [{type: 'ecologicalOutcome'}] }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Resources',
      name: 'resources',
      type: 'array',
      description: 'Select existing resources from "Shared" content',
      of: [{
        type: 'reference',
        to: [{type: 'resource'}] 
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'peerReviewSection',
      type: 'bottomBanner',
      title: 'Peer Review Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'createCreditClassSection',
      type: 'bottomBanner',
      title: 'Create Credit Class Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footerLink',
      type: 'url',
      title: 'Footer Link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};