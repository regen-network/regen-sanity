export default {
  name: 'optionalCustomImage',
  type: 'object',
  title: 'Image (optional)',
  description: 'Upload/select an image or provide an image URL',
  fields: [
    {
      title: 'Image URL',
      name: 'imageHref',
      type: 'url',
      validation: Rule =>
        Rule.custom((imageHref, context) => {
          return optionalImageValidation(imageHref, context.parent?.image);
        }),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule =>
        Rule.custom((image, context) => {
          return optionalImageValidation(context.parent?.imageHref, image);
        }),
    },
    {
      title: 'Image alt tag (for accessibility)',
      name: 'imageAlt',
      type: 'string',
      validation: Rule =>
        Rule.custom((alt, context) => {
          const { imageHref, image } = context.parent || {};
          if (!imageHref && !image) return true;
          return alt ? true : 'Alt text is required when an image is provided';
        }),
    },
  ],
};

function optionalImageValidation(imageHref, image) {
  if (!imageHref && !image) return true;
  if (imageHref && image) {
    return 'Please provide an image URL or upload/select an image, not both';
  }
  return true;
}


