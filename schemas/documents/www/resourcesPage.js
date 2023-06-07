export default {
  name: 'resourcesPage',
  type: 'document',
  title: 'Resources Page',
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Resources Sections',
      name: 'resourcesSections',
      type: 'array',
      of: [{ type: 'resourcesSection' }],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
