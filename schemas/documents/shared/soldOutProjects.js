export default {
  title: 'Sold out projects',
  name: 'soldOutProjects',
  type: 'document',
  fields: [
    {
      title: 'Sold out projects list',
      name: 'soldOutProjectsList',
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
