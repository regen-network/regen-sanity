export default {
  type: 'object',
  name: 'imageCustomBody',
  title: 'Image with a custom body',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
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
