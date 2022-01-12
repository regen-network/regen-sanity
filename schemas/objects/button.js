export default {
  type: 'object',
  name: 'button',
  title: 'Button',
  fields: [
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'link',
    },
    {
      title: 'Open Button Link in modal',
      name: 'buttonModal',
      type: 'boolean',
      validation: Rule =>
        Rule.custom((buttonModal, context) => {
          return booleanValidation(context.parent.buttonBlankTarget, buttonModal);
        }),
    },
    {
      title: 'Open Button Link in new tab',
      name: 'buttonBlankTarget',
      type: 'boolean',
      validation: Rule =>
        Rule.custom((buttonBlankTarget, context) => {
          return booleanValidation(context.parent.buttonModal, buttonBlankTarget);
        }),
    },
  ],
};

function booleanValidation(v1, v2) {
  return v1 && v2
    ? 'The link cannot open in a modal and in a new tab at the same time'
    : true;
}
