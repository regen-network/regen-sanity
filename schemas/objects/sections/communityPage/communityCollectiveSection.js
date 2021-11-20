export default {
  title: 'Community Go To Section',
  name: 'communityCollectiveSection',
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
      title: 'button text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Signup Form Url',
      name: 'signupFormUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}