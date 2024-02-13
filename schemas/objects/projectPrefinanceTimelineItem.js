export const prefinanceTimelineItemPreview = {
  select: {
    description: 'status.description',
    date: 'prefinanceTimelineItem.date',
    endDate: 'prefinanceTimelineItem.endDate',
    currentStatus: 'prefinanceTimelineItem.currentStatus',
  },
  prepare(selection) {
    const { description, date, endDate, currentStatus } = selection;
    return {
      title: description,
      subtitle: `${currentStatus} ${date || ''} ${endDate ? ` - ${endDate}` : ''}`,
    };
  },
};

export default {
  title: 'Project Prefinance Timeline Item',
  name: 'projectPrefinanceTimelineItem',
  type: 'object',
  fields: [
    {
      title: 'Status',
      name: 'status',
      type: 'reference',
      to: [{ type: 'projectPrefinanceTimelineStatus' }],
      validate: Rule => Rule.required(),
    },
    {
      title: 'Date(s) and current status',
      name: 'prefinanceTimelineItem',
      type: 'prefinanceTimelineItem',
      validate: Rule => Rule.required(),
    },
  ],
  preview: prefinanceTimelineItemPreview,
};


