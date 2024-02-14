export default {
  title: 'Prefinance Projects',
  name: 'prefinanceProjects',
  type: 'object',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Learn more link',
      name: 'learnMore',
      type: 'url',
    },
  ],
};
