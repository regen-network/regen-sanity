export default {
  title: 'Presskit Awards Section',
  name: 'presskitAwardsSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{
        type: 'titleImageLink',
      }],
      validation: Rule => Rule.required(),
    }
  ],
}