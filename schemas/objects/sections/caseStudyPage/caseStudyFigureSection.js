export default {
  title: 'Case Study Figure Section',
  name: 'caseStudyFigureSection',
  type: 'object',
  fields: [
    {
      title: 'Title (optional)',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Background',
      name: 'background',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Figures',
      name: 'figures',
      type: 'array',
      of: [
        { type: 'caseStudyFigure' },
      ],
      validation: Rule => Rule.required(),
    },
  ],
}
