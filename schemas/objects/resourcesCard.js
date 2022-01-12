// TODO this could probably live in /shared and be more directly tied to our
// `resource`s. This is a stop-gap for ease of the sanity migration
export default {
  title: 'Resources card',
  name: 'resourcesCard',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
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
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Updated',
      description: 'optional',
      name: 'updated',
      type: 'string',
    },
    {
      title: 'Button Href',
      name: 'buttonHref',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  initialValue: {
    buttonText: 'Learn More',
  },
};
