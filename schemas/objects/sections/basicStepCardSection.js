export default {
  type: 'object',
  title: 'Basic Step Card Section',
  name: 'basicStepCardSection',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Step cards',
      name: 'stepCards',
      type: 'array',
      of: [{ type: 'stepCard' }],
      validation: Rule => Rule.required(),
    },
  ],
};
