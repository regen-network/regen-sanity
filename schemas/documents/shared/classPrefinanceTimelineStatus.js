export default {
  name: 'classPrefinanceTimelineStatus',
  title: 'Credit Class Prefinance Timeline Status',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ],
};
