export default {
  type: 'object',
  name: 'linkItem',
  title: 'Link Item',
  fields: [
    {
      title: 'Href',
      name: 'href',
      type: 'url',
      description: 'This can be a relative URL (starting with "/") or full URL',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
