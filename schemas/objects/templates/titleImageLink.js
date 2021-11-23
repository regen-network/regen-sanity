export default {
  type: 'object',
  name: 'titleImageLink',
  title: 'Plain text title, image, and link',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link to (href)',
      name: 'link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}
