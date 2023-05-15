export default {
  type: 'object',
  title: 'Project Details Section',
  name: 'projectDetailsSection',
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
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
};
