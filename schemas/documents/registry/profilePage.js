export default {
  name: 'profilePage',
  type: 'document',
  title: 'Profile Page',
  fields: [
    {
      title: 'Banner Card',
      name: 'bannerCard',
      type: 'bannerCard',
      description:
        'This card gets displayed the first time a user accesses his/her own profile page',
    },
    {
      title: 'Project card prompt',
      name: 'projectCardPrompt',
      type: 'customPortableText',
      description:
        'This prompt gets displayed on off-chain projects cards on project admin\'s private view of their projects',
    },
  ],
};
