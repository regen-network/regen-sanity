export default {
  type: 'object',
  name: 'homeFoldSection',
  title: 'Home Fold Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
