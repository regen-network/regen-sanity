export default {
  name: 'creditTypeSection',
  type: 'object',
  title: 'Credit Type Section',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Top Subtitle',
      name: 'subtitleTop',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Top Description',
      name: 'descriptionTop',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom Subtitle',
      name: 'subtitleBottom',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom Description',
      name: 'descriptionBottom',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Institutional cards',
      name: 'institutionalCards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Flex Credits cards',
      name: 'flexCreditCards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: Rule => Rule.required(),
    },
  ],
};
