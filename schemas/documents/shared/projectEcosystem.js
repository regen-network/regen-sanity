export default {
  title: 'Project Ecosystem',
  name: 'projectEcosystem',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
  ],
};
