export default {
  type: 'object',
  name: 'carbonPlusSection',
  title: 'Carbon Plus Section',
  fields: [
    {
      title: 'Small Header Featured',
      name: 'smallHeaderFeatured',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Small Header Credit Name',
      name: 'smallHeaderCreditName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Link Url',
      name: 'linkUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
