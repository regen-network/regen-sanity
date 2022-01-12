export default {
  type: 'document',
  name: 'caseStudyPage',
  title: 'Case Study Page',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      title: 'Card Image',
      name: 'cardImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Background',
      name: 'background',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'About Section',
      name: 'aboutSection',
      type: 'caseStudyAboutSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Context Section',
      name: 'contextSection',
      type: 'caseStudyContextSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Approach Section',
      name: 'approachSection',
      type: 'caseStudyApproachSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Figure Section',
      name: 'figureSection',
      type: 'caseStudyFigureSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Funding Section',
      name: 'fundingSection',
      type: 'caseStudyFundingSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Conclusion Section',
      name: 'conclusionSection',
      type: 'caseStudyConclusionSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom Section',
      name: 'bottomSection',
      type: 'caseStudyBottomSection',
      validation: Rule => Rule.required(),
    },
  ],
};
