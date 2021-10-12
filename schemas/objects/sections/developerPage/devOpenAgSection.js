export default {
  type: 'object',
  name: 'devOpenAgSection',
  title: 'Top Section',
  fields: [
    {
      title: 'image',
      name: 'Image',
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
      title: 'Body',
      name: 'body',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
}

