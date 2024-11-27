export default {
  name: 'complianceInfo',
  type: 'document',
  title: 'Compliance Info',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
};
