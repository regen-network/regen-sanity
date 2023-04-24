export default {
  name: 'projectsPage',
  type: 'document',
  title: 'Projects Page',
  fields: [
    {
      name: 'gettingStartedResourcesSection',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesSection' }],
      title: 'Resources for Getting Started Section',
      validation: Rule => Rule.required(),
    },
  ],
};
