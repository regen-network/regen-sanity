export default {
  name: 'pageMetadata',
  type: 'object',
  title: 'SEO & Metadata',
  fields: [
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
  ],
};
