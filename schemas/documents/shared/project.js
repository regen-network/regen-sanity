export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project id',
      name: 'projectId',
      type: 'string',
      description: 'on-chain project id',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project Location',
      name: 'location',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Area',
      name: 'area',
      type: 'number',
    },
    {
      title: 'Area unit',
      name: 'areaUnit',
      type: 'string',
      options: {
        list: ['hectares', 'acres'],
      },
    },
    {
      title: 'Credibility Cards',
      name: 'credibilityCards',
      type: 'array',
      of: [
        {
          type: 'detailsCard',
        },
      ],
    },
  ],
};
