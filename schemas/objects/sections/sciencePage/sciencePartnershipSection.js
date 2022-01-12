export default {
  title: 'Partners Section',
  name: 'sciencePartnershipSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [
        {
          type: 'imageCustomBody',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
