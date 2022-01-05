export default {
  title: 'Image BoldText Label',
  name: 'imageBoldTextLabel',
  type: 'object',
  fields: [
    {
      title: 'BoldText',
      name: 'boldText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ]
}
