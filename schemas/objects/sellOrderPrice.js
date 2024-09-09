export default {
  title: 'Sell Order Price',
  name: 'sellOrderPrice',
  type: 'object',
  fields: [
    {
      title: 'Sell order id',
      name: 'sellOrderId',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sell order price',
      description: 'price per credit in USD',
      name: 'usdPrice',
      type: 'number',
      validation: Rule => Rule.required(),
    },
  ],
};
