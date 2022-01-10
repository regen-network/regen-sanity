export default {
  type: 'object',
  title: 'Mainnet Launch Info Section',
  name: 'mainnetLaunchInfoSection',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Title',
      name: 'cardTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Body',
      name: 'cardBody',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Action Items',
      name: 'actionItems',
      type: 'array',
      of: [
        {
          type: 'mainnetActionItem',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
