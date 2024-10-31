export default {
  type: 'object',
  name: 'complianceCredits',
  title: 'Compliance Credits',
  fields: [
    {
      title: 'Credits Registered',
      name: 'creditsRegistered',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Credits Available',
      name: 'creditsAvailable',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Credits Retired',
      name: 'creditsRetired',
      type: 'number',
      validation: Rule => Rule.required(),
    },
  ],
};
