export default {
  name: 'stepCardSection',
  type: 'object',
  title: 'Step Card Section',
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
      title: 'Step cards',
      name: 'stepCards',
      type: 'array',
      of: [{ type: 'stepCard' }],
      validation: Rule => Rule.required(),
    },
  ],
};
