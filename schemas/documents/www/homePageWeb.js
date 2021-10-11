export default {
  name: 'homePageWeb',
  type: 'document',
  title: 'Web Home Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      name: 'homeFoldSection',
      type: 'titleAndDescription',
      title: 'Fold Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'marketplaceSection',
      type: 'marketplaceSection',
      title: 'Marketplace Section',
      validation: Rule => Rule.required(),
    },
  ],
};