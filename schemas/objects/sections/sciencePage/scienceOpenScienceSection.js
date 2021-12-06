export default {
  title: 'Open Science Section',
  name: 'scienceOpenScienceSection',
  type: 'object',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header start',
      name: 'headerStart',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header Green text',
      name: 'headerGreen',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Phases',
      name: 'phases',
      type: 'array',
      of: [{
        type: 'titleBody',
      }],
      validation: Rule => Rule.required(),
    }
  ],
}