export default {
  title: 'Resources Registry Sub-Section',
  name: 'resourcesRegistrySubSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'resource' }],
      }],
      validation: Rule => Rule.required(),
    }
  ],
}
