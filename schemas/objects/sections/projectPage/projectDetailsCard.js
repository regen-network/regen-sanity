export default {
  type: 'object',
  title: 'Project Details Card',
  name: 'projectDetailsCard',
  fields: [
    {
      title: 'Credibility Card',
      name: 'credibilityCard',
      type: 'reference',
      to: [{ type: 'credibilityCard' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Claims',
      name: 'claims',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'claim' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
