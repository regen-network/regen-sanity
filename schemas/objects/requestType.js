export default {
  title: 'Request Type',
  name: 'requestType',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
