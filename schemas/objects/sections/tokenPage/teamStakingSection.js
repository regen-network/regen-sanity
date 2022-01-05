export default {
  title: 'Token Unlock section',
  name: 'tokenUnlockSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
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
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: Rule => Rule.required(),
    },
  ],
}
