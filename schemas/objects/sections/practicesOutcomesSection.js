export default {
  type: 'object',
  name: 'practicesOutcomesSection',
  title: 'Practices and Outcomes Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Note',
      description: '(optional)',
      name: 'note',
      type: 'string',
    },
    {
      title: 'Land Management Practices',
      name: 'practices',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'landManagementPractice'}] }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Ecological Outcomes',
      name: 'outcomes',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'ecologicalOutcome'}] }],
      validation: Rule => Rule.required(),
    },
  ]
}