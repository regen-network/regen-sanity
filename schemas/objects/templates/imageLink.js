export default {
  title: 'Image with Link',
  name: 'imageLink',
  type: 'object',
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'link',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ],
}
