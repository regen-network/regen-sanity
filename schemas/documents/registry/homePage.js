export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
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
