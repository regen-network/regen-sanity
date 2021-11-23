export default {
  title: 'Presskit Timeline Item',
  name: 'presskitTimelineItem',
  type: 'object',
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description (optional)',
      name: 'description',
      type: 'string',
    },
  ]
}

