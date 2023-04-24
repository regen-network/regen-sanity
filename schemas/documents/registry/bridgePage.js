export default {
  name: 'bridgePage',
  type: 'document',
  title: 'Bridge Page',
  fields: [
    {
      name: 'gettingStartedResourcesCard',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesCard' }],
      title: 'Resources for Getting Started Card',
      description:
        'This content will appear at the bottom of the Bridge page (on both /ecocredits/bridge and /ecocredits/accounts/{addr}/bridge)',
      validation: Rule => Rule.required(),
    },
  ],
};
