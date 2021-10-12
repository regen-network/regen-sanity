export default {
  type: 'object',
  name: 'homeValuesSection',
  title: 'Values Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image Items',
      name: 'imageItems',
      type: 'array',
      of: [{ type: 'valuesImageItem' }],
      validation: Rule => Rule.required(),
    },
  ],
}
