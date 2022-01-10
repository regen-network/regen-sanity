export default {
  title: 'Token Newsletter section',
  name: 'tokenNewsletterSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Input Text',
      name: 'inputText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
