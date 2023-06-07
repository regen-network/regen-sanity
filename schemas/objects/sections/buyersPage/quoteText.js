export default {
  type: 'object',
  name: 'buyersQuoteText',
  title: 'Quote Text',
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
  ],
};
