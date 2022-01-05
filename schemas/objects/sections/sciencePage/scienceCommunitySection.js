export default {
  title: 'Science Community Section',
  name: 'scienceCommunitySection',
  type: 'object',
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
      title: 'Members',
      name: 'members',
      type: 'array',
      of: [{
        type: 'scienceCommunityMember',
      }],
      validation: Rule => Rule.required(),
    }
  ],
}
