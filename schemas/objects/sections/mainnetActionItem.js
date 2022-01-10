export default {
  type: 'object',
  title: 'Mainnet Action Item',
  name: 'mainnetActionItem',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link URL',
      name: 'linkUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ],
};
