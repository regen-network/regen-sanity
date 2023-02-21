export default {
  title: 'Partner',
  name: 'partner',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
