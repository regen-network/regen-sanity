export default {
  name: 'caseStudiesPage',
  type: 'document',
  title: 'Case Studies Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'listSection',
      type: 'caseStudiesListSection',
      title: 'List Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'aboutSection',
      type: 'caseStudiesAboutSection',
      title: 'About Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contextSection',
      type: 'caseStudiesContextSection',
      title: 'Context Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'approachSection',
      type: 'caseStudiesApproachSection',
      title: 'Approach Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'fundingSection',
      type: 'caseStudiesFundingSection',
      title: 'Funding Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'caseStudies',
      type: 'array',
      title: 'Case Studies',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudyPage' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'conclusionSectionHeader',
      type: 'string',
      title: 'Conclusion Section Header',
      validation: Rule => Rule.required(),
    },
  ],
};
