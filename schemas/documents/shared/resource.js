import toPlainText from '../../../utils/toPlainText';

export default {
  name: 'resource',
  type: 'document',
  title: 'Resource',
  fields: [
    {
      name: 'title',
      type: 'customPortableText',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'customPortableText',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lastUpdated',
      type: 'date',
      title: 'Last Updated',
      description:
        'If not provided, the "last updated" date displayed will be the stored updated_at date of this Resource item or corresponding Document item',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: toPlainText(title),
      };
    },
  },
};
