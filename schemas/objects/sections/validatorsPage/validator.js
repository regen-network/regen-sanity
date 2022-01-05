export default {
  title: 'Validator',
  name: 'validator',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Members',
      name: 'members',
      type: 'array',
      of: [{
        type: 'imageLink',
      }],
      validation: Rule => Rule.required(),
    }
  ],
}
