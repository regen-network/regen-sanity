// TODO could this be normalized with the other `callToAction` object?
export default {
  type: 'object',
  name: 'fundCallToAction',
  title: 'Fund page Call to Action',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
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
