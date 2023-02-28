export default {
  name: 'actionCard',
  type: 'object',
  title: 'ActionCard',
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
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Note',
      name: 'note',
      type: 'customPortableText',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ],
};
