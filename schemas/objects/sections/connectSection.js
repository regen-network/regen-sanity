export default {
  title: 'Connect Section',
  name: 'connectSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{
        type: 'connectSectionLink',
      }],
      validation: Rule => Rule.required(),
    }
  ],
}
