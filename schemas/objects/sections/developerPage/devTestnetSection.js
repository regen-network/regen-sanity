export default {
  type: 'object',
  name: 'devTestnetSection',
  title: 'Testnet Section',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Right Column Label',
      name: 'rightColumnLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Right Column Content',
      name: 'rightColumnContent',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Left Column Label',
      name: 'leftColumnLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Left Column Content',
      name: 'leftColumnContent',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
}

