export default {
  name: 'mainnetPage',
  type: 'document',
  title: 'Mainnet Page',
  fields: [
    {
      name: 'launchDate',
      type: 'datetime',
      title: 'Launch Date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'seoDescription',
      type: 'string',
      title: 'SEO Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'livecastLink',
      type: 'string',
      title: 'Livecast Link',
      validation: Rule => Rule.required(),
    },
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'launchInfoSection',
      type: 'mainnetLaunchInfoSection',
      title: 'Launch Info Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'whatsNextSection',
      type: 'mainnetWhatsNextSection',
      title: "What's Next Section",
      validation: Rule => Rule.required(),
    },
    {
      name: 'mediaItems',
      title: 'Media Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'media' }] }],
      validation: Rule => Rule.required(),
    },
  ],
};
