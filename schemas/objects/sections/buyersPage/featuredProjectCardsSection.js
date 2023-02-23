export default {
  type: 'object',
  title: 'Featured Project Cards Section',
  name: 'buyersFeaturedProjectCardsSection',
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
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featuredProjectCard' }],
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
