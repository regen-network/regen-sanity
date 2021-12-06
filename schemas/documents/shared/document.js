export default {
  title: 'Document',
  name: 'doc',
  type: 'document',
  fields: [
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Last Updated',
      description: 'Optional',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Type',
      name: 'type',
      description: 'Optional, e.g. "Monitoring", "Marketing", "Project Plan", etc.',
      type: 'string',
    },
  ]
}