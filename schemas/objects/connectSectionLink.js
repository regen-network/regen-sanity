export default {
  title: 'Connect Section Link',
  name: 'connectSectionLink',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
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
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: Rule => Rule.required()
        .custom(icon => {
          if (icon.asset && icon.asset._ref && !icon.asset._ref.endsWith('svg')) {
            return 'Please select an SVG file'
          }
          return true
        }),
    },
    {
      title: 'Link',
      name: 'href',
      type: 'link',
      validation: Rule => Rule.required()
    },
  ]
}
