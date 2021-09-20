export default {
  title: 'Timeline Item',
  name: 'timelineItem',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      description: '(optional)',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'tag'}] }],
    },
  ]
}

