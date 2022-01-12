export default {
  name: 'buyersPage',
  type: 'document',
  title: 'For Buyers Page',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imageGridSection',
      type: 'imageGridSection',
      title: 'Image Grid Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'featuredSection',
      type: 'reference',
      to: [{ type: 'featuredSection' }],
      title: 'Featured Credit Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'faqSection',
      type: 'bottomBanner',
      title: 'FAQ Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footerButtonText',
      type: 'string',
      title: 'Footer Button Text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};
