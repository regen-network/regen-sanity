export default {
  type: 'object',
  name: 'imageGridSection',
  title: 'Image Grid Section',
  fields: [
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
      description: '(Optional)'
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'imageGridItem'}],
      validation: Rule => Rule.required(),
    },
  ]
}