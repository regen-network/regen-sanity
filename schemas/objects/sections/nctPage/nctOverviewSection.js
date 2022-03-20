export default {
  title: 'Overview Section',
  name: 'nctOverviewSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'background',
      type: 'image',
    },
    {
      title: 'Title Icon',
      name: 'titleIcon',
      type: 'image',
      description: 'Icon to be displayed next to the title text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'body',
      name: 'body',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Labeled Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'labeledTextLinkable',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
