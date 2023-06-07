export default {
  type: 'object',
  title: 'Quote Section',
  name: 'buyersQuoteSection',
  fields: [
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
    },
    {
      title: 'Quote text',
      name: 'quoteText',
      description: 'Text for the quote',
      type: 'buyersQuoteText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person',
      name: 'person',
      type: 'reference',
      to: { type: 'person' },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
