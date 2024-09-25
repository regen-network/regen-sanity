export default {
  name: 'tebuBanner',
  type: 'document',
  title: 'Tebu Banner',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Learn more link',
      name: 'learnMoreLink',
      type: 'url',
      validation: Rule => Rule.required(),
    },
  ],
};
