export default {
  type: 'object',
  name: 'project',
  title: 'Project',
  fields: [
    {
      // optionnal project name to make it easier to track projects already added to the list
      title: 'Project name',
      name: 'projectName',
      type: 'string',
    },
    {
      // on-chain project id
      title: 'Project id',
      name: 'projectId',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
