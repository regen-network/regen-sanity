export default {
  type: 'object',
  title: 'Partners Section',
  name: 'homeWebPartnersSection',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partner' }],
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
