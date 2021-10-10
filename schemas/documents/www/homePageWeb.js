export default {
  name: 'homePageWeb',
  type: 'document',
  title: 'Web Home Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      name: 'homeFoldSection',
      type: 'homeFoldSection',
      title: 'Fold Section',
      validation: Rule => Rule.required(),
    },
  ],
};