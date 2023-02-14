export default {
  type: 'object',
  name: 'imageItemsSection',
  title: 'Image Items Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Image cards',
      name: 'imageCards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: Rule => Rule.required(),
    },
  ],
};
