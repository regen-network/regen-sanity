export default {
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Form Request Types',
      name: 'formRequestTypes',
      type: 'array',
      of: [{ type: 'requestType' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Message for Partners',
      name: 'messageForPartners',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Location',
      name: 'location',
      type: 'titleImageCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Email',
      name: 'email',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'FAQ',
      name: 'faq',
      type: 'titleImage',
      validation: Rule => Rule.required(),
    },
  ],
};
