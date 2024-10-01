export default {
  type: 'object',
  name: 'linkItem',
  title: 'Link Item',
  fields: [
    {
      title: 'Href',
      name: 'href',
      type: 'url',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
