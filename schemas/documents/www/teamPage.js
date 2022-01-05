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
      title: 'Contributor Section',
      name: 'contributorSection',
      type: 'teamSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Advisor Section',
      name: 'advisorSection',
      type: 'teamSection',
      validation: Rule => Rule.required(),
    },
  ]
}
