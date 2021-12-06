export default {
  title: 'Science Title and Description Section',
  name: 'scienceTitleDescriptionSection',
  type: 'object',
  fields: [
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
      title: 'Outcomes',
      name: 'outcomes',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'ecologicalOutcome' }],
      }],
      validation: Rule => Rule.required(),
    }
  ],
}