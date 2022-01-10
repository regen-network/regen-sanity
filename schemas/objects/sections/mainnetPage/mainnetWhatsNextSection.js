export default {
  type: 'object',
  title: 'Mainnet Launch Info Section',
  name: 'mainnetWhatsNextSection',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Info Items',
      name: 'infoItems',
      type: 'array',
      of: [
        {
          type: 'mainnetInfoItem',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
