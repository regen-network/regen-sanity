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
    {
      title: 'Credit Image',
      name: 'creditImage',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Book a call link',
      name: 'bookCallLink',
      type: 'link',
      validation: Rule => Rule.required(),
    },
  ],
};
