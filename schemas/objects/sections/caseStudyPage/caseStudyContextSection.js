export default {
  title: 'Case Study Context Section',
  name: 'caseStudyContextSection',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Challenges',
      name: 'challenges',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.required(),
    },
  ],
}