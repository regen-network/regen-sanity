export default {
  title: 'Credit Certification',
  name: 'creditCertification',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
  ],
};
