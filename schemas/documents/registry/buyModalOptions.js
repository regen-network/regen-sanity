export default {
  type: 'document',
  name: 'buyModalOptions',
  title: 'Buy Modal Options',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Buy Options Cards',
      name: 'cards',
      type: 'array',
      description:
        'Create one or several cards (min 1), to be displayed when clicking a buy button for a non-connected user',
      of: [
        {
          type: 'actionCard',
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
};
