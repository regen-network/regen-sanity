export default {
  type: 'object',
  title: 'Mainnet Info Item',
  name: 'mainnetInfoItem',
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
      title: 'Icon',
      name: 'icon',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Git Link',
      name: 'gitLink',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ]
}