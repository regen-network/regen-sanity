export default {
  name: 'caseStudiesListSection',
  type: 'object',
  title: 'Case Studies List Section',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'view',
      type: 'string',
      title: 'List Section View Link Text',
      validation: Rule => Rule.required(),
    },
  ],
};
