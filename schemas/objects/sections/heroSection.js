export default {
  type: 'object',
  name: 'heroSection',
  title: 'Hero Section',
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
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Tooltip Message',
      name: 'tooltipText',
      type: 'string',
      description:
        '(Optional) If any text is underlined in the description, it will show this message when hovered',
    },
  ],
};
