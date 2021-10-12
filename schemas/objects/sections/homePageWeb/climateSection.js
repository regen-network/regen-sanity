export default {
  type: 'object',
  name: 'climateSection',
  title: 'Climate Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
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
      title: 'Solution',
      name: 'solution',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Problem',
      name: 'problem',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
  ],
}
