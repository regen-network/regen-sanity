export default {
  name: 'terrasosHeader',
  type: 'document',
  title: 'Terrasos Header',
  fields: [
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      description: 'Items to be displayed in the header',
      of: [{ type: 'linkItem' }],
    },
  ],
};
