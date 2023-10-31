export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO Info',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroSection',
      type: 'homePageTopSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'projectsSection',
      type: 'homePageProjectsSection',
      title: 'Projects Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'creditClassesSection',
      type: 'titleCustomBody',
      title: 'Credit Classes Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'gettingStartedResourcesSection',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesSection' }],
      title: 'Resources for Getting Started Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bottomBanner',
      type: 'bottomBanner',
      title: 'Bottom Section',
      validation: Rule => Rule.required(),
    },
  ],
};
