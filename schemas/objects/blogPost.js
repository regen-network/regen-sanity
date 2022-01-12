export default {
  type: 'object',
  name: 'blogPost',
  title: 'Blog Post',
  fields: [
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
    {
      title: 'image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
