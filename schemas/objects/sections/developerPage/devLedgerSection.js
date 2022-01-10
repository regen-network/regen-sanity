export default {
  type: 'object',
  name: 'devLedgerSection',
  title: 'Top Section',
  fields: [
    {
      title: 'Cosmos Image',
      name: 'cosmosImage',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
};
