export default {
  name: 'projectsPage',
  type: 'document',
  title: 'Projects Page',
  __experimental_actions: ['update', /*'create', 'delete', */ 'publish'],
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
