export default {
  title: 'Resources for Getting Started Card',
  name: 'gettingStartedResourcesCard',
  type: 'document',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      description: 'Add a maximum of 3 links',
      of: [
        {
          type: 'button',
        },
      ],
      validation: Rule => Rule.required().max(3),
    },
  ],
};
