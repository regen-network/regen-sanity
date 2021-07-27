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
      name: 'buttonHref',
      type: 'url',
      description: 'This can be a relative url (starting with "/") or full url',
      validation: Rule => Rule.uri({
        allowRelative: true,
      }).custom((buttonHref, context) => {
        console.log('doc',context)
        return hrefValidation(buttonHref, context.parent.buttonDoc)
      }).warning()
    },
    {
      name: 'buttonDoc',
      type: 'reference',
      to: [{type: 'doc'}],
      title: 'Document',
      description: 'Select an existing document from "Shared" content instead of providing a link',
      validation: Rule => Rule.custom((buttonDoc, context) => {
        return hrefValidation(context.parent.buttonHref, buttonDoc)
      }).warning()
    },
    {
      title: 'Open Button Link in modal',
      name: 'buttonModal',
      type: 'boolean',
      validation: Rule => Rule.custom((buttonModal, context) => {
        console.log(context)

        return booleanValidation(context.parent.buttonBlankTarget, buttonModal)
      }).warning()
    },
    {
      title: 'Open Button Link in new tab',
      name: 'buttonBlankTarget',
      type: 'boolean',
      validation: Rule => Rule.custom((buttonBlankTarget, context) => {
        return booleanValidation(context.parent.buttonModal, buttonBlankTarget)
      }).warning()
    },
  ]
}

function hrefValidation(v1, v2) {
  return (!v1 && !v2) || (v1 && v2)
    ? 'Please select an existing document or provide a link'
    : true
}

function booleanValidation(v1, v2) {
  return v1 && v2
    ? 'The link cannot open in a modal and in a new tab at the same time'
    : true
}
