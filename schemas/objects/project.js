export default {
  type: 'object',
  name: 'project',
  title: 'Project',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
      description:
        'optional project name to make it easier to track projects already added to the list',
    },
    {
      title: 'Project id',
      name: 'projectId',
      type: 'string',
      description: 'on-chain project id',
      validation: Rule => Rule.required(),
    },
  ],
};
