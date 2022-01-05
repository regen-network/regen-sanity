export default {
  title: 'Science Page',
  name: 'sciencePage',
  type: 'document',
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title and Description Section',
      name: 'titleDescriptionSection',
      type: 'scienceTitleDescriptionSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Open Science section',
      name: 'openScienceSection',
      type: 'scienceOpenScienceSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Partnerships section',
      name: 'partnershipSection',
      type: 'sciencePartnershipSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Community section',
      name: 'communitySection',
      type: 'scienceCommunitySection',
      validation: Rule => Rule.required(),
    },
  ]
}
