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
    {
      title: 'Second Button',
      name: 'secondButton',
      type: 'button',
      description: '(Optional)'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ]
}