export default {
  type: 'object',
  title: 'Project Details Card',
  name: 'projectDetailsCard',
  fields: [
    {
      title: 'Credibility Card',
      name: 'credibilityCard',
      type: 'reference',
      to: [{ type: 'credibilityCard' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Claims',
      name: 'claims',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'claim' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      credibilityCardTitle: 'credibilityCard.title',
      claim0: 'claims.0.description',
      claim1: 'claims.1.description',
      claim2: 'claims.2.description',
    },
    prepare(selection) {
      const { credibilityCardTitle, claim0, claim1, claim2 } = selection;
      const claims = [claim0, claim1, claim2].filter(Boolean);

      return {
        title: credibilityCardTitle,
        subtitle: claims.join(', '),
      };
    },
  },
};
