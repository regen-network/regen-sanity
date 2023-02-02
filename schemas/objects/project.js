export default {
  type: 'object',
  name: 'project',
  title: 'Project',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project id',
      name: 'projectId',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
