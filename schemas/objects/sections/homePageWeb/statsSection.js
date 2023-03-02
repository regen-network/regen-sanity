export default {
  type: 'object',
  title: 'Stats Section',
  name: 'homeWebStatsSection',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Stats Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'statCard' }],
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
