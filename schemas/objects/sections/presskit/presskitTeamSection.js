export default {
  title: 'Presskit Team Section',
  name: 'presskitTeamSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button text',
      name: 'buttonText',
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
    }
  ],
}