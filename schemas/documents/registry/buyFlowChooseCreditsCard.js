export default {
  type: 'document',
  name: 'buyFlowChooseCreditsCard',
  title: 'Buy Flow Choose Credits Card',
  fields: [
    {
      title: 'Info card',
      name: 'infoCard',
      type: 'infoCard',
      description: 'Create the card to be displayed on the first step "Choose credits" of the buy flow',
      validation: Rule => Rule.required(),
    },
  ],
};
