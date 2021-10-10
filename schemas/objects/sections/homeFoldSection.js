export default {
  type: 'object',
  name: 'homeFoldSection',
  title: 'Home Fold Section',
  fields: [
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
