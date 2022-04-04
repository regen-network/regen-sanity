export default {
  type: 'object',
  name: 'labeledTextLinkable',
  title: 'Labeled Text',
  description: 'Label and text that is optionally linkable',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link (optional)',
      name: 'link',
      type: 'link',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};
