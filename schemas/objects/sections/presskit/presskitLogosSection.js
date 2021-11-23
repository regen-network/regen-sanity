export default {
  title: 'Presskit Logos Section',
  name: 'presskitLogosSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'url',
      validation: Rule => Rule.required(),
    },
  ],
}