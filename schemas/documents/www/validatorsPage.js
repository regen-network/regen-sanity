export default {
  title: 'Validators Page',
  name: 'validatorsPage',
  type: 'document',
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'What Section',
      name: 'whatSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Who Section',
      name: 'whoSection',
      type: 'validatorWhoSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Connect Section Header',
      name: 'connectSectionHeader',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Why section',
      name: 'whySection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
  ],
};
