export default {
  title: 'Blog Section',
  name: 'blogSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Posts',
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'blogPost',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
