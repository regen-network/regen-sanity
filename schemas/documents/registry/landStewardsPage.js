export default {
  name: 'landStewardsPage',
  type: 'document',
  title: 'For Land Stewards Page',
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'designedForFarmersSection',
      type: 'imageItemsSection',
      title: 'Designed for Farmers Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'joinFarmersSection',
      type: 'dualImageSection',
      title: 'Join Farmers Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'practicesOutcomesSection',
      type: 'practicesOutcomesSection',
      title: 'Practices and Outcomes Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timelineSection',
      type: 'timelineSection',
      title: 'Timeline Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'featuredSection',
      type: 'reference',
      to: [{ type: 'featuredSection' }],
      title: 'Featured Credit Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'moreQuestionsSection',
      type: 'bottomBanner',
      title: 'More Questions Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footerButton',
      type: 'button',
      title: 'Footer Button',
      validation: Rule => Rule.required(),
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};
