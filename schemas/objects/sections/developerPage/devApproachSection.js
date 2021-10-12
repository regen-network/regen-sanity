export default {
  type: 'object',
  name: 'devApproachSection',
  title: 'Approach section',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
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
      title: 'Body',
      name: 'body',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
}

