export default {
  type: 'object',
  name: 'callToAction',
  title: 'Call to Action',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: Rule => Rule.required(),
    },
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
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link Url',
      name: 'linkUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
