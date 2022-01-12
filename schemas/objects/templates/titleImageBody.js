export default {
  type: 'object',
  name: 'titleImageBody',
  title: 'Title with image and plain text body',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
};
