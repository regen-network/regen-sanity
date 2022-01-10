export default {
  title: 'Presskit Featured Section',
  name: 'presskitFeaturedSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Articles',
      name: 'articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'media' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
