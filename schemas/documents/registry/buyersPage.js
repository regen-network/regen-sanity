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
      name: 'ecologicalCreditsSection',
      type: 'imageItemsSection',
      title: 'Ecological Credits Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imageGridSection',
      type: 'imageGridSection',
      title: 'Image Grid Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ecologicalCreditCardsSection',
      type: 'ecologicalCreditCardsSection',
      title: 'Ecological Credit Cards Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'featuredProjectCardsSection',
      type: 'buyersFeaturedProjectCardsSection',
      title: 'Featured Project Cards Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'partnersSection',
      type: 'buyersPartnersSection',
      title: 'Partners Section',
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
