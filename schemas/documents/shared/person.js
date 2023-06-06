export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      title: 'Person Name',
      name: 'personName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Person Role',
      name: 'personRole',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
