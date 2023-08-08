export default {
  title: 'Ecological Credit Card',
  name: 'ecologicalCreditCard',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'reference',
      to: [{ type: 'creditType' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'CreditClass',
      name: 'creditClass',
      type: 'reference',
      to: [{ type: 'creditClass' }],
    },
    {
      title: 'Credit Infos',
      name: 'creditInfos',
      type: 'creditInfos',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Offset Methods',
      name: 'offsetMethods',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'offsetMethod' }],
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
    {
      title: 'Project Activities',
      name: 'projectActivities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projectActivity' }],
        },
      ],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
    },
  ],
};
