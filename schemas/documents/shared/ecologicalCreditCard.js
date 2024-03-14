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
      title: 'Credit Category',
      name: 'type',
      type: 'reference',
      to: [{ type: 'creditCategory' }],
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
    {
      title: 'Secondary Button',
      name: 'secondaryButton',
      type: 'button',
    },
  ],
};
