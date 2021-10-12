export default {
  type: 'object',
  name: 'marketplaceSection',
  title: 'Marketplace Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Tooltop',
      name: 'tooltip',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyGreenTextWithPopover',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Calls to Action',
      name: 'callToActions',
      type: 'array',
      of: [{ type: 'callToAction' }],
      validation: Rule => Rule.required(),
    },
  ],
}
