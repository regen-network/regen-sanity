export default {
  name: 'faqPage',
  type: 'document',
  title: 'FAQ Page',
  fields: [
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'faqCategory' }],
      validation: Rule => Rule.required(),
    },
  ],
};
