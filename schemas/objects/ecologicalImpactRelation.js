export default {
  type: 'object',
  name: 'ecologicalImpactRelation',
  title: 'Ecological Impact Relation',
  fields: [
    {
      title: 'Primary Impact',
      name: 'primary',
      type: 'boolean',
    },
    {
      title: 'Ecological Impact',
      name: 'ecologicalImpact',
      description: 'Select existing ecological impact from "Shared" content',
      type: 'reference',
      to: [{ type: 'ecologicalImpact' }],
    },
  ],
  preview: {
    select: {
      ecologicalImpact: 'ecologicalImpact.name',
      primary: 'primary',
    },
    prepare(selection) {
      const { ecologicalImpact, primary } = selection;
      return {
        title: `${ecologicalImpact} (${primary ? 'primary' : 'co-benefit'})`,
      };
    },
  },
};
