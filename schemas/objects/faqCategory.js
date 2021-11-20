export default {
  title: 'FAQ Category',
  name: 'faqCategory',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Questions',
      name: 'questions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        }
      ],
      validation: Rule => Rule.required(),
    },
  ]
}

