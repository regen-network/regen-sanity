export default {
  title: 'Land Steward',
  name: 'landSteward',
  type: 'object',
  validation: Rule => Rule.required(),
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Resources',
      name: 'resources',
      type: 'array',
      description: 'Select existing resources from "Shared" content',
      of: [
        {
          type: 'reference',
          to: [{ type: 'resource' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Videos',
      name: 'videos',
      type: 'array',
      description: 'Select existing media of type "video" from "Shared" content',
      of: [
        {
          type: 'reference',
          to: [{ type: 'media' }],
          options: {
            filter: 'type == $type',
            filterParams: { type: 'video' },
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Projects Section Title',
      name: 'projectsTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'CTA Button',
      name: 'ctaButton',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Featured Project Handles',
      name: 'featuredProjectIds',
      type: 'array',
      description:
        'This should correspond to the last part of the project page URL: /projects/{handle}',
      of: [
        {
          type: 'string',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Step Sections',
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'fullStepCardSection',
        },
      ],
    },
    {
      title: 'Connect Section',
      name: 'connectSection',
      type: 'connectSection',
    },
  ],
};
