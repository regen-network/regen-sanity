export default {
  title: 'Full Step Card Section',
  name: 'fullStepCardSection',
      type: 'object',
      fields: [
        {
          title: 'Pre-Title',
          name: 'preTitle',
          type: 'string',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Description',
          name: 'description',
          type: 'customPortableText',
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