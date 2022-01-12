export default {
  name: 'communityPage',
  type: 'document',
  title: 'Community Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'connectSection',
      type: 'communityConnectSection',
      title: 'Connect Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'goToSection',
      type: 'communityGoToSection',
      title: 'Go To Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'collectiveSection',
      type: 'communityCollectiveSection',
      title: 'Collective Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'collaborateSection',
      type: 'communityCollaborateSection',
      title: 'Collaborate Section',
      validation: Rule => Rule.required(),
    },
  ],
};
