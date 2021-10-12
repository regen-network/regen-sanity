export default {
  type: 'object',
  name: 'titleBody',
  title: 'Title and plain text Body',
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
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
