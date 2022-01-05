export default {
  title: 'Token Pool section',
  name: 'tokenPoolSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}
