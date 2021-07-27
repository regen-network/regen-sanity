export default {
  type: 'object',
  name: 'reviewSection',
  title: 'Hero Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Timespan',
      name: 'timespan',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
    {
      title: 'Disclaimer Top',
      name: 'disclaimerTop',
      type: 'string',
    },
    {
      title: 'Disclaimer Bottom',
      name: 'disclaimerBottom',
      type: 'string',
    },
    {
      title: 'Step Cards Subsections',
      name: 'stepCardsSubsections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
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
      ]
    }
  ]
}