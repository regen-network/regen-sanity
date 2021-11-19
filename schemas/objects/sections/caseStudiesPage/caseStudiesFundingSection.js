export default {
  name: 'caseStudiesFundingSection',
  type: 'object',
  title: 'Case Studies Funding Section',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'details',
      name: 'details',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'results',
      name: 'results',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'next',
      name: 'next',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ]
};