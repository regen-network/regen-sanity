export default {
  title: 'Presskit Photos Section',
  name: 'presskitPhotosSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required(),
    },
  ],
}