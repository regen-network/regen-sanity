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
      title: 'Large Image',
      name: 'largeImage',
      type: 'image',
      description: 'This image will appear on the credit class pages of this type. If none specified, the image from the credit category will be shown.',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'creditCategory' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'string',
      description: 'This overrides the on-chain unit',
    },
    {
      title: 'Unit definition',
      name: 'unitDefinition',
      type: 'customPortableText',
      description: '"Learn more" about the credit unit',
    },
  ],
};
