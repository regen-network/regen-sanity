export default {
  title: 'Featured Project Card',
  name: 'featuredProjectCard',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Project',
      name: 'project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Credit Class',
      name: 'creditClass',
      type: 'reference',
      to: [{ type: 'creditClass' }],
      validation: Rule => Rule.required(),
    },
  ],
};
