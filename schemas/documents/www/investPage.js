export default {
  name: 'investPage',
  type: 'document',
  title: 'Invest Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
  ],
};