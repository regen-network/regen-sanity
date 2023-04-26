export default {
  title: 'Credibility Card',
  name: 'credibilityCard',
  type: 'document',
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
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Claims',
      name: 'claims',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'claim' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
