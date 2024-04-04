export default {
  name: 'bannerCard',
  type: 'object',
  title: 'BannerCard',
  fields: [
    {
      title: 'Title',
      name: 'title',
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
    {
      title: 'Button label',
      name: 'buttonLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
