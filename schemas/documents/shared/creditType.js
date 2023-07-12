export default {
  title: 'Credit Type',
  name: 'creditType',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Large Image',
      name: 'largeImage',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
