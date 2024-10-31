import sharedProject from '../shared/project';

export default {
  name: 'terrasosProject',
  title: 'Terrasos Project',
  type: 'document',
  fields: [
    ...sharedProject.fields,
    {
      title: 'Compliance credits',
      name: 'complianceCredits',
      type: 'complianceCredits',
    },
  ],
};
