export default {
  name: 'caseStudiesContextSection',
  type: 'object',
  title: 'Case Studies Context Section',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Challenges',
      name: 'challenges',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
