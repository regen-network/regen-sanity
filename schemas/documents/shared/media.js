export default {
  name: 'media',
  type: 'document',
  title: 'Media',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'customImage',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Article', value: 'article' },
          { title: 'Podcast', value: 'podcast' },
        ],
      },
    },
  ],
};
