export default {
  title: 'Step card',
  name: 'stepCard',
  type: 'object',
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: Rule => Rule.required(),
    },
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
      title: 'Button',
      name: 'button',
      type: 'button',
    },
    {
      title: 'Tag Label',
      name: 'tagName',
      type: 'string',
      validation: Rule => Rule.optional(),
    },
    {
      title: 'FAQ',
      name: 'faqs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'faq'}] 
      }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
    {
      title: 'Video URL',
      name: 'videoSrc',
      type: 'url',
    },
  ]
}