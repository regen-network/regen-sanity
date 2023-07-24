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
      description: 'This image will appear on the credit class cards of this type',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Large Image',
      name: 'largeImage',
      type: 'image',
      description: 'This image will appear on the credit class pages of this type',
      validation: Rule => Rule.required(),
    },
  ],
};
