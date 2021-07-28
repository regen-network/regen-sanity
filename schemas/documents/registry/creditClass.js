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
      type: 'object',
      validation: Rule => Rule.required(),
      fields: commonFields(),
    },
    {
      title: 'Land Steward',
      name: 'landSteward',
      type: 'object',
      validation: Rule => Rule.required(),
      fields: [
        ...commonFields(),
        {
          title: 'Featured Project Handles',
          name: 'featuredProjectIds',
          type: 'array',
          description: 'This should correspond to the last part of the project page URL: /projects/{handle}',
          of: [{
            type: 'string',
          }],
          validation: Rule => Rule.required(),
        },
        {
          title: 'Step Sections',
          name: 'steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Pre-Title',
                  name: 'preTitle',
                  type: 'string',
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
                  type: 'customPortableText',
                },
                {
                  title: 'Step cards',
                  name: 'stepCards',
                  type: 'array',
                  of: [{ type: 'stepCard' }],
                  validation: Rule => Rule.required(),
                },  
              ]
            }
          ]
        },
        {
          title: 'Connect Section',
          name: 'connectSection',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              title: 'Links',
              name: 'links',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {
                    title: 'Name',
                    name: 'name',
                    type: 'string',
                    validation: Rule => Rule.required(),
                  },
                  {
                    title: 'Description',
                    name: 'description',
                    type: 'customPortableText',
                    validation: Rule => Rule.required(),
                  },
                  {
                    title: 'Icon',
                    name: 'icon',
                    type: 'image',
                    validation: Rule => Rule.required()
                      .custom(icon => {
                        if (icon.asset && icon.asset._ref && !icon.asset._ref.endsWith('svg')) {
                          return 'Please select an SVG file'
                        }
                        return true
                      }),
                  },
                  {
                    title: 'Link',
                    name: 'href',
                    type: 'link',
                    validation: Rule => Rule.required()
                  },
                ]
              }],
              validation: Rule => Rule.required(),
            }
          ],
        },
      ],
    },
  ]
}

function commonFields() { return [
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
    of: [{
      type: 'reference',
      to: [{type: 'resource'}] 
    }],
    validation: Rule => Rule.required(),
  },
  {
    title: 'Videos',
    name: 'videos',
    type: 'array',
    description: 'Select existing media of type "video" from "Shared" content',
    of: [{
      type: 'reference',
      to: [{type: 'media'}],
      options: {
        filter: 'type == $type',
        filterParams: {type: 'video'}
      }
    }],
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
]
}