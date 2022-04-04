export default {
  title: 'Token Section',
  name: 'nctTokenSection',
  type: 'object',
  fields: [
    {
      title: 'Card Image',
      name: 'cardImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Title',
      name: 'cardTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Subtitle',
      name: 'cardSubtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Body',
      name: 'cardBody',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Card Button',
      name: 'cardButton',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Image',
      name: 'detailImage',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Title',
      name: 'detailTitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Subtitle',
      name: 'detailSubtitle',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Body',
      name: 'detailBody',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Button 1',
      name: 'detailButton1',
      type: 'button',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Detail Button 2',
      name: 'detailButton2',
      type: 'button',
      validation: Rule => Rule.required(),
    },
  ],
};
