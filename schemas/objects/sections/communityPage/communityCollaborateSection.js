export default {
  title: 'Community Collaborate Section',
  name: 'communityCollaborateSection',
  type: 'object',
  fields: [
    {
      title: 'Title and Body',
      name: 'titleBody',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        { type: 'resourcesCard' }
      ],
      validation: Rule => Rule.required(),
    },
  ],
}
