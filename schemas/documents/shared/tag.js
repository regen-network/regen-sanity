export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ]
}