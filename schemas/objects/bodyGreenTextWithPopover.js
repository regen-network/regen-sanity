export default {
  type: 'object',
  name: 'bodyGreenTextWithPopover',
  title: 'Body text with Popover',
  fields: [
    {
      title: 'Green',
      name: 'green',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Middle',
      name: 'middle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Popover',
      name: 'popover',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'End',
      name: 'end',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
