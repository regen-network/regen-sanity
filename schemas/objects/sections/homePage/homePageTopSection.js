export default {
  type: 'object',
  name: 'homePageTopSection',
  title: 'Top Banner Section',
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
      title: 'Background Image',
      name: 'background',
      type: 'customImage',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'customImage',
    },
  ],
};
