export default {
  name: 'basketDetailsPage',
  type: 'document',
  title: 'Basket Details Page',
  fields: [
    {
      name: 'gettingStartedResourcesCard',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesCard' }],
      title: 'Resources for Getting Started Card',
      description: 'This content will appear at the bottom of the Basket Details page',
      validation: Rule => Rule.required(),
    },
  ],
};
