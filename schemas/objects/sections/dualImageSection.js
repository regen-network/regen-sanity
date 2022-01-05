export default {
  type: 'object',
  name: 'dualImageSection',
  title: 'Dual Image Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Left',
      name: 'left',
      type: 'imageBoldTextLabel',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Right',
      name: 'right',
      type: 'imageBoldTextLabel',
      validation: Rule => Rule.required(),
    },
  ]
}
