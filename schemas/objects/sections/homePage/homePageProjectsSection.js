export default {
  type: 'object',
  name: 'homePageProjectsSection',
  title: 'Home Page Projects Section',
  fields: [
    {
      name: 'titleCustomBody',
      type: 'titleCustomBody',
      title: 'Title and Body',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Featured Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
  ],
};
