export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: ['update', /*'create', 'delete', */ 'publish'],
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
