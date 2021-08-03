export default {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    {
      title: 'URL',
      name: 'buttonHref',
      type: 'url',
      description: 'This can be a relative URL (starting with "/") or full URL',
      validation: Rule => Rule.uri({
        allowRelative: true,
      }).custom((buttonHref, context) => {
        return hrefValidation(buttonHref, context.parent.buttonDoc)
      })
    },
    {
      name: 'buttonDoc',
      type: 'reference',
      to: [{type: 'doc'}],
      title: 'Document',
      description: 'Select an existing document from "Shared" content instead of providing a link',
      validation: Rule => Rule.custom((buttonDoc, context) => {
        return hrefValidation(context.parent.buttonHref, buttonDoc)
      })
    },
  ]
}

function hrefValidation(v1, v2) {
  return (!v1 && !v2) || (v1 && v2)
    ? 'Please select an existing document or provide a link'
    : true
}