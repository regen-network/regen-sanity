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
        return validateLink(context, buttonHref, context.parent.buttonDoc)
      }),
    },
    {
      name: 'buttonDoc',
      type: 'reference',
      to: [{type: 'doc'}],
      title: 'Document',
      description: 'Select an existing document from "Shared" content instead of providing a link',
      validation: Rule => Rule.custom((buttonDoc, context) => {
        return validateLink(context, context.parent.buttonHref, buttonDoc)
      }),
    },
  ]
}

function validateLink(context, v1, v2) {
  const btnIdx = context.path.findIndex(p => p === 'button')
        
  if (btnIdx > -1) {
    let doc = context.document;
    for (let i = 0; i <= btnIdx; i++) {
      const path = context.path[i]
      if (path._key) {
        doc = doc.find(d => d._key === path._key)
      } else {
        doc = doc[context.path[i]]
      }
    }

    // If link is within a button
    if (doc._type === 'button') {
      // Only do validation if buttonText is not empty
      if (doc.buttonText) {
        return hrefValidation(v1, v2)
      } else {
        return true;
      }
    }
  }
  return hrefValidation(v1, v2)
}

function hrefValidation(v1, v2) {
  return (!v1 && !v2) || (v1 && v2)
    ? 'Please select an existing document or provide a link'
    : true
}