export default {
  name: 'partnersPage',
  type: 'document',
  title: 'Media Page',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contactHeader',
      type: 'string',
      title: 'Contact Card Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contactBody',
      type: 'customPortableText',
      title: 'Contact Card Body',
      validation: Rule => Rule.required(),
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'partnerLogo' }],
      validation: Rule => Rule.required(),
    },
  ],
};
