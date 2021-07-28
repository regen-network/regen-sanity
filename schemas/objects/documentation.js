export default {
  name: 'documentation',
  type: 'object',
  title: 'Documentation',
  description: 'Latest version, program and other Methodology details are not editable from the CMS since they are considered dynamic content that is pulled from the Postgres database',
  validation: Rule => Rule.required(),
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ]
}