export default {
  title: 'FAQ',
  name: 'faq',
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
};
