export default {
  title: 'Case Study Approach Section',
  name: 'caseStudyApproachSection',
  type: 'object',
  fields: [
    {
      title: 'Description (optional)',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Details',
      name: 'details',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Results',
      name: 'results',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Next',
      name: 'next',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Figure Image',
      name: 'figureImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Figure Title',
      name: 'figureTitle',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
}
