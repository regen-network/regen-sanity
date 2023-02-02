export default {
  title: 'Sold out projects',
  name: 'soldOutProjects',
  type: 'document',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      title: 'Sold out projects list',
      name: 'soldOutProjectsList',
      type: 'array',
      of: [
        {
          type: 'project',
        },
      ],
    },
  ],
};
