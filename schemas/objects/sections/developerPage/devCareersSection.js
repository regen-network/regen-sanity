export default {
  type: 'object',
  name: 'devCareersSection',
  title: 'Top Section',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}

