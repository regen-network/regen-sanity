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
      validation: Rule => Rule.required(),
    },
  ],
};
