export default {
  type: 'object',
  title: 'Quote Section',
  name: 'buyersQuoteSection',
  fields: [
    {
      title: 'Quote first part',
      name: 'quoteFirstPart',
      description: 'This part has a green gradient',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Quote middle part',
      name: 'quoteMiddlePart',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Quote last part',
      name: 'quoteLastPart',
      description: 'This part has a green gradient',
      type: 'string',
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
      title: 'Partner',
      name: 'partner',
      type: 'reference',
      to: { type: 'partner' },
      validation: Rule => Rule.required(),
    },
  ],
};
