export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Icon or Image',
      name: 'icon',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Tooltip',
      name: 'tooltip',
      type: 'customPortableText',
    },
  ]
}
