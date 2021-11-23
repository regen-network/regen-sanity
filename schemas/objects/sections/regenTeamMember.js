export default {
  title: 'Regen Team Member',
  name: 'regenTeamMember',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'LinkedIn Url (optional)',
      name: 'linkedinUrl',
      type: 'url',
    },
    {
      title: 'Twitter Url (optional)',
      name: 'twitterUrl',
      type: 'url',
    },
    {
      title: 'Github Url (optional)',
      name: 'githubUrl',
      type: 'url',
    },
  ],
}