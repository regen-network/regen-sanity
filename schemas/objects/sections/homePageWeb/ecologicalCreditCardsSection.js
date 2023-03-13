export default {
  type: 'object',
  title: 'Ecological Credit Cards Section',
  name: 'homeWebEcologicalCreditCardsSection',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ecologicalCreditCard' }],
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
