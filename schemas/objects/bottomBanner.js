export default {
  type: 'object',
  name: 'bottomBanner',
  title: 'Bottom banner',
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
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: Rule => Rule.required(),
    },
  ]
}