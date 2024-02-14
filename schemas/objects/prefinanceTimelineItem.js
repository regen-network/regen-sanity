export default {
  title: 'Prefinance Timeline Item',
  name: 'prefinanceTimelineItem',
  type: 'object',
  fields: [
    {
      title: 'Single date or start date',
      name: 'date',
      type: 'date',
      description: 'optional',
    },
    {
      title: 'End date',
      name: 'endDate',
      type: 'date',
      description: 'optional if single date',
    },
    {
      title: 'Current status',
      name: 'currentStatus',
      type: 'string',
      options: {
        list: [
          { title: "Projected", value: "projected" },
          { title: "Done", value: "done" }
        ],
        layout: "radio",
      },
      validate: Rule => Rule.required(),
      description: 'Timeline items that are done will be written in black text on the timeline while projected items are greyed out. The most recent done item will show up as the current status on the project page.'
    },
  ],
};

