export default {
  title: 'Case Study Figure',
  name: 'caseStudyFigure',
  type: 'object',
  fields: [
    {
      title: 'Title (optional)',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Spacing (optional)',
      name: 'spacing',
      type: 'string',
    },
  ],
}
