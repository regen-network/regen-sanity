export default {
  type: 'object',
  name: 'timelineSection',
  title: 'Timeline Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Timeline Items',
      name: 'timelineItems',
      type: 'array',
      of: [{ type: 'timelineItem' }],
      validation: Rule => Rule.required(),
    },
  ]
}
