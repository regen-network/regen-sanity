export default {
  title: 'Team section',
  name: 'teamSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Members',
      name: 'members',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'regenTeamMember' }],
      }],
      validation: Rule => Rule.required(),
    },
  ],
}