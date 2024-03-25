export default {
  title: 'Credit Category',
  name: 'creditCategory',
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
      description: 'This icon will appear on the credit class cards with credit type belonging to this category',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Large Image',
      name: 'largeImage',
      type: 'image',
      description: `This image will appear on the credit class pages with credit type belonging to this category, unless there's already one specified for the credit type`,
      validation: Rule => Rule.required(),
    },
  ],
};
