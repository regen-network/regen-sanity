export default {
  title: 'Presskit Timeline Section',
  name: 'presskitTimelineSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Completed Item Index',
      name: 'completedItemIndex',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'presskitTimelineItem',
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
