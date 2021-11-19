export default {
  title: 'Case Study Conclusion Section',
  name: 'caseStudyConclusionSection',
  type: 'object',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        { type: 'imageWithTitle' }
      ],
      validation: Rule => Rule.required(),
    },
  ],
}