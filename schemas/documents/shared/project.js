export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Project slug, on-chain id or off-chain uuid',
      name: 'projectId',
      type: 'string',
      description:
        'Slug should be the prefered option if the project has a slug, otherwise it might result in the data below not being displayed on the project page.',
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
      title: 'Sell orders available for fiat purchases',
      name: 'fiatSellOrders',
      type: 'array',
      of: [
        {
          type: 'sellOrderPrice',
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
