export default {
  name: 'customImage',
  type: 'object',
  title: 'Image',
  description: 'Upload/select an image or provide an image URL',
  fields: [
    {
      title: 'Image URL',
      name: 'imageHref',
      type: 'url',
      validation: Rule =>
        Rule.custom((imageHref, context) => {
          return imageValidation(imageHref, context.parent.image);
        }),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule =>
        Rule.custom((image, context) => {
          return imageValidation(context.parent.imageHref, image);
        }),
    },
    {
      title: 'Image alt tag (for accessibility)',
      name: 'imageAlt',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};

function imageValidation(imageHref, image) {
  return (!imageHref && !image) || (imageHref && image)
    ? 'Please provide an image URL or upload/select an image'
    : true;
}
