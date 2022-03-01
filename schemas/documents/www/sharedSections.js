// this could potentially live in the `/shared` folder instaed of `/www`, but right now it looks like the content of these is only living in web-www
export default {
  title: 'Shared Sections',
  name: 'sharedSections',
  type: 'document',
  fields: [
    {
      title: 'Newsletter Section',
      name: 'newsletter',
      description:
        'Shared newsletter signup section - currently used in the /science and /token pages',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Blog Section',
      name: 'blog',
      description:
        'Shared blog section - currently used in the marketing home page and /science page',
      type: 'blogSection',
      validation: Rule => Rule.required(),
    },
  ],
};
