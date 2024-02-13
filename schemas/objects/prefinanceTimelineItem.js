
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
          { title: "In progress", value: "inProgress" },
          { title: "Done", value: "done" }
        ],
        layout: "radio",
      },
      description: '"In progress" shown with a yellow dot and "done" with a green dot on the project page',
      validate: Rule => Rule.required(),
    },
  ],
};

