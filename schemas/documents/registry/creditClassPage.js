export default {
  name: 'creditClassPage',
  type: 'document',
  title: 'Project Page',
  fields: [
    {
      name: 'creditClassDetailsSection',
      type: 'detailsSection',
      title: 'Credit Class Details Section',
      validation: Rule => Rule.required(),
    },
  ],
};
