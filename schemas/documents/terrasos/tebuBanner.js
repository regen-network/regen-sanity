export default {
  name: 'tebuBanner',
  type: 'document',
  title: 'Tebu Banner',
  fields: [
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      description: 'Items to be displayed in the banner',
      of: [{ type: 'link' }],
    },
  ],
};
