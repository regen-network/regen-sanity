export default {
  name: 'caseStudiesAboutSection',
  type: 'object',
  title: 'Case Studies About Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Practice',
      name: 'practice',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Biome',
      name: 'biome',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Region',
      name: 'region',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
