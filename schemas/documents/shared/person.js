export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      title: 'Person Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person Role',
      name: 'role',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
