export default {
  name: 'fundPage',
  type: 'document',
  title: 'Fund Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'SEO Description',
      name: 'seoDescription',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Fold Section',
      name: 'foldSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Thesis Section',
      name: 'thesisSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Calls To Action',
      name: 'callsToAction',
      type: 'array',
      of: [{ type: 'fundCallToAction' }],
      validation: Rule => Rule.required(),
    },
  ],
};
