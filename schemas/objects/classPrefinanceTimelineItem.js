import { prefinanceTimelineItemPreview } from './projectPrefinanceTimelineItem';

export default {
  title: 'Class Prefinance Timeline Item',
  name: 'classPrefinanceTimelineItem',
  type: 'object',
  fields: [
    {
      title: 'Status',
      name: 'status',
      type: 'reference',
      to: [{ type: 'classPrefinanceTimelineStatus' }],
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

