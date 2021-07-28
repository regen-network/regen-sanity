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
      description: 'This will be used in the methodology page url: "/methodologies/{path}"',
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
      type: 'object',
      title: 'Documentation',
      description: 'Latest version, program and other Methodology details are not editable from the CMS since they are considered dynamic content that is pulled from the Postgres database',
      validation: Rule => Rule.required(),
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Button',
          name: 'button',
          type: 'button',
          validation: Rule => Rule.required(),
        },
        {
          title: 'Image',
          name: 'image',
          type: 'customImage',
          validation: Rule => Rule.required(),
        },
      ]
    },
    {
      title: 'Ecological Impact',
      name: 'ecologicalImpact',
      type: 'array',
      of: [{
        type: 'ecologicalImpactRelation',
      }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Resources',
      name: 'resources',
      type: 'array',
      description: 'Select existing resources from "Shared" content',
      of: [{
        type: 'reference',
        to: [{type: 'resource'}] 
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'bottomSection',
      type: 'heroSection',
      title: 'Bottom Section',
      validation: Rule => Rule.required(),
    },
  ]
}