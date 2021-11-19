export default {
  title: 'Case Study Bottom Section',
  name: 'caseStudyBottomSection',
  type: 'object',
  fields: [
    {
      title: 'Background',
      name: 'background',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person Name',
      name: 'personName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person Image',
      name: 'personImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person Role',
      name: 'personRole',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}