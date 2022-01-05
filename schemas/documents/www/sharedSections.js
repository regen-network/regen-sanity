// this could potentially live in the `/shared` folder instaed of `/www`, but right now it looks like the content of these is only living in web-www
export default {
  title: 'Shared Sections',
  name: 'sharedSections',
  type: 'document',
  fields: [
    {
      title: 'Newsletter Section',
      name: 'newsletter',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Blog Section',
      name: 'blog',
      type: 'blogSection',
      validation: Rule => Rule.required(),
    },
  ]
}
