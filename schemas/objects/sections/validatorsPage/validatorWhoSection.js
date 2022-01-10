export default {
  title: 'Validator Who Section',
  name: 'validatorWhoSection',
  type: 'object',
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
      title: 'Validators',
      name: 'validators',
      type: 'array',
      of: [
        {
          type: 'validator',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
