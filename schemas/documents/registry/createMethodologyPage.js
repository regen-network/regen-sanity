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
      type: 'createMethodologyStepCardSection',
      title: 'Step Card Section',
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