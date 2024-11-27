export default {
  name: 'terrasosBookCall',
  type: 'document',
  title: 'Book a call',
  fields: [{
    title: 'Button',
    name: 'button',
    description: 'Used on project page (both bottom banner and compliance info tab)',
    type: 'button',
    validation: Rule => Rule.required(),
  }],
};