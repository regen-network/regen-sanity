export default {
  name: 'statCard',
  type: 'document',
  title: 'Stat Card',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Stat',
      name: 'stat',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ],
};
