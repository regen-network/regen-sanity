export default {
  name: 'imageWithTitle',
  type: 'object',
  title: 'Image',
  description: 'Image and Title',
  fields: [
    {
      title: 'Title (optional)',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
  ]
}
