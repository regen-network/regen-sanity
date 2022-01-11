export default {
  name: 'faqPage',
  type: 'document',
  title: 'FAQ Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
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
