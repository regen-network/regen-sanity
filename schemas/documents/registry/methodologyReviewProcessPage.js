export default {
  name: 'methodologyReviewProcessPage',
  type: 'document',
  title: 'Methodology Review Process Page',
  __experimental_actions: ['update', /*'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'internalReviewSection',
      type: 'reviewSection',
      title: 'Internal Review Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'externalReviewSection',
      type: 'reviewSection',
      title: 'External Review Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bottomBanner',
      type: 'bottomBanner',
      title: 'Bottom Banner',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};
