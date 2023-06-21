export default {
  name: 'projectPage',
  type: 'document',
  title: 'Project Page',
  fields: [
    {
      name: 'gettingStartedResourcesSection',
      description: 'This content will appear on all project pages',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesSection' }],
      title: 'Resources for Getting Started Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'projectDetailsSection',
      type: 'projectDetailsSection',
      title: 'Project Details Section',
      validation: Rule => Rule.required(),
    },
    {
      title: 'OTC Card',
      name: 'otcCard',
      type: 'actionCard',
      description:
        'Create the OTC card to be displayed in the top right column of the project page',
      validation: Rule => Rule.required(),
    },
  ],
};
