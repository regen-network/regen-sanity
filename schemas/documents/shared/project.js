export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Project id, uuid or slug',
      name: 'projectId',
      type: 'string',
      description: 'on-chain project id, off-chain uuid or slug',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project Pre-Financing',
      name: 'projectPrefinancing',
      type: 'projectPrefinancing',
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
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Project Image',
      name: 'image',
      type: 'customImage',
    },
    {
      title: 'Project Location',
      name: 'location',
      type: 'string',
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
  ],
};
