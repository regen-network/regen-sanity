export default {
  type: 'document',
  name: 'methodology',
  title: 'Methodology',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
      description:
        'This will be used in the methodology page url: "/methodologies/{path}"',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      name: 'steps',
      type: 'basicStepCardSection',
      title: 'Methodology Process',
      validation: Rule => Rule.required(),
    },
    {
      name: 'documentation',
      type: 'documentation',
      title: 'Documentation',
    },
    {
      title: 'Ecological Impact',
      name: 'ecologicalImpact',
      type: 'array',
      of: [
        {
          type: 'ecologicalImpactRelation',
        },
      ],
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
      name: 'bottomSection',
      type: 'heroSection',
      title: 'Bottom Section',
      validation: Rule => Rule.required(),
    },
  ],
};
