export default {
  name: 'creditInfos',
  type: 'object',
  title: 'Credit Infos',
  fields: [
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Count',
      name: 'count',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
