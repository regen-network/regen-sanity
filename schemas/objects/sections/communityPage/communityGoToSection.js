export default {
  title: 'Community Go To Section',
  name: 'communityGoToSection',
  type: 'object',
  fields: [
    {
      title: 'Blog Button Text',
      name: 'blogButtonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Discussion Button Href',
      name: 'discussionButtonHref',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Discussion Button Text',
      name: 'discussionButtonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Discussion Label',
      name: 'discussionLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Blog Label',
      name: 'blogLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Video Button Href',
      name: 'videoButtonHref',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Video Label',
      name: 'videoLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Video Button Text',
      name: 'videoButtonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Blog Button Href',
      name: 'blogButtonHref',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}