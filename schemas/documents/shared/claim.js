export default {
  title: 'Claim',
  name: 'claim',
  type: 'document',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
