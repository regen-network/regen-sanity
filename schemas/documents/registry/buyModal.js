export default {
  type: 'document',
  name: 'buyModal',
  title: 'Buy Modal',
  fields: [
    {
      title: 'Info card',
      name: 'infoCard',
      type: 'infoCard',
      description: 'Create the card to be displayed at the top of the buy modal',
      validation: Rule => Rule.required(),
    },
  ],
};
