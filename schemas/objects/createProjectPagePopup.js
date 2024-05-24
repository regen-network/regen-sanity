export default {
  title: 'Create Project Page Popup',
  name: 'createProjectPagePopup',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
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
      title: 'Text with link to our guides',
      name: 'guidesLink',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'titleImageCustomBody',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Button label',
      name: 'buttonLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
