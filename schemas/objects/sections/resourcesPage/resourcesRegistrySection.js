export default {
  title: 'Resources Registry Section',
  name: 'resourcesRegistrySection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Document table title',
      name: 'documentTableTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Documents',
      name: 'documents',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'doc' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subsections',
      name: 'subsections',
      type: 'array',
      of: [
        {
          type: 'resourcesRegistrySubSection',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
