export default {
  title: 'Resources Section',
  name: 'resourcesSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'resource' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
