export default {
  name: 'presskitPage',
  type: 'document',
  title: 'Presskit Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleDescriptionSection',
      type: 'titleCustomBody',
      title: 'Title Description Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'enableSection',
      type: 'titleImageCustomBody',
      title: 'Enable Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timelineSection',
      type: 'presskitTimelineSection',
      title: 'Timeline Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'teamSection',
      type: 'presskitTeamSection',
      title: 'Team Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'featuredSection',
      type: 'presskitFeaturedSection',
      title: 'Featured Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'awardsSection',
      type: 'presskitAwardsSection',
      title: 'Awards Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logosSection',
      type: 'presskitLogosSection',
      title: 'Logos Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'connectSectionHeader',
      type: 'string',
      title: 'Connect Section Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'photosSection',
      type: 'presskitPhotosSection',
      title: 'Photos Section',
      validation: Rule => Rule.required(),
    },
  ],
};
