export default {
  title: 'Project Prefinancing',
  name: 'projectPreFinancing',
  type: 'object',
  fields: [
    {
      title: 'Is a prefinance project',
      name: 'isPrefinanceProject',
      type: 'boolean',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'in USD',
      validation: (Rule) => validation(Rule).positive(),
    },
    {
      title: 'Estimated Issuance',
      name: 'estimatedIssuance',
      type: 'number',
      description: 'estimated number of credits that will be issued',
      validation: (Rule) => validation(Rule).positive(),
    },
    {
      title: 'Stripe payment link',
      name: 'stripePaymentLink',
      type: 'url',
      validation,
    },
    {
      title: 'Project prefinance terms',
      name: 'prefinanceTerms',
      type: 'customPortableText',
      validation,
    },
    {
      title: 'Link to purchase agreement',
      name: 'purchaseAgreementLink',
      type: 'url',
      validation,
    },
    {
      title: 'Projected credit delivery date',
      name: 'projectedCreditDeliveryDate',
      type: 'date',
      validation,
    },
    {
      title: 'Project timeline',
      name: 'projectTimeline',
      type: 'array',
      of: [
        {
          type: 'projectPrefinanceTimelineItem',
        },
      ],
    },
    {
      title: 'Credit class timeline',
      name: 'classTimeline',
      type: 'array',
      of: [
        {
          type: 'classPrefinanceTimelineItem',
        },
      ],
    },
    {
      title: 'What supporting this project enables',
      name: 'supportEnables',
      type: 'array',
      of: [
        {
          type: 'text',
        },
      ],
      validation,
    },
  ],
};

function validation(Rule) {
  return Rule.custom((value, context) => {
    if (context.parent.isPrefinanceProject && !value) {
      return 'Required for pre-finance projects';
    }
    return true;
  });
}

