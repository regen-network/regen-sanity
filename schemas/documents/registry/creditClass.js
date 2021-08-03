export default {
  type: 'document',
  name: 'creditClass',
  title: 'Credit Class',
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
      description: 'This will be used in the credit class page url: "/credit-classes/{path}"',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'customPortableText',
      description: 'This short description is shown on the Registry Homepage',
      validation: Rule => Rule.required(),
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
      title: 'Overview Cards',
      name: 'overviewCards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'SDGs',
      name: 'sdgs',
      type: 'array',
      description: 'Select existing SDGs from "Shared" content',
      of: [{
        type: 'reference',
        to: [{type: 'sdg'}] 
      }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Buyer',
      name: 'buyer',
      type: 'buyer',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Land Steward',
      name: 'landSteward',
      type: 'landSteward',
      validation: Rule => Rule.required(),
    },
  ]
}