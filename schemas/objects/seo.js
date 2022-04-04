export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  description:
    'Fields to be used for SEO - social media previews and search engine optimization',
  validation: Rule => Rule.required(),
  options: {
    collapsible: true,
    collapsed: true,
  },
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
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
