export default {
  title: 'Case Study About Section',
  name: 'caseStudyAboutSection',
  type: 'object',
  fields: [
    {
      title: 'About',
      name: 'about',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Map Image',
      name: 'mapImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'About Image',
      name: 'aboutImage',
      type: 'customImage',
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
    {
      title: 'lineRotate (optional)',
      name: 'lineRotate',
      type: 'string',
    },
    {
      title: 'lineWidth (optional)',
      name: 'lineWidth',
      type: 'string',
    },
  ],
}
