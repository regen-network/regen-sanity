export default {
  name: 'createMethodologyStepCardSection',
  type: 'object',
  title: 'Create Methodology Step Card Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Main Description',
      name: 'mainDescription',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom Title',
      name: 'bottomTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom Description',
      name: 'bottomDescription',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Step cards',
      name: 'stepCards',
      type: 'array',
      of: [{ type: 'stepCard' }],
      validation: Rule => Rule.required(),
    },
  ]
}