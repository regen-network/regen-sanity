export default {
  title: 'Team Page',
  name: 'teamPage',
  type: 'document',
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Core Section',
      name: 'coreSection',
      type: 'teamSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Board Section',
      name: 'advisorSection', // this was renamed on the site, but easier to keep as is
      type: 'teamSection',
      validation: Rule => Rule.required(),
    },
  ],
};
