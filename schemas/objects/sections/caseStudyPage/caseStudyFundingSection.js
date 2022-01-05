export default {
  title: 'Case Study Funding Section',
  name: 'caseStudyFundingSection',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
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
  ],
}
