export default {
  title: 'Resources for Getting Started Section',
  name: 'gettingStartedResourcesSection',
  type: 'document',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Resources cards',
      name: 'resourcesCards',
      type: 'array',
      description: 'Select existing resources for getting started cards from "Shared" content, maximum 4',
      of: [
        {
          type: 'reference',
          to: [{ type: 'gettingStartedResourcesCard' }],
        },
      ],
      validation: Rule => Rule.required().max(4),
    },
  ],
};
