export default {
  name: 'resource',
  type: 'document',
  title: 'Resource',
  fields: [
    {
      title: 'Button text',
      name: 'btnText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'imgSrc',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'customPortableText',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      validation: Rule => Rule.required(),
    },
    // {
    //   name: 'document',
    //   type: 'doc',
    //   title: 'Document',
    //   description: 'Select an existing document',
    //   validation: Rule => Rule.custom((doc, context) => {
    //     return documentValidation(context.document.href, doc)
    //   }).warning()
    // },
    // {
    //   name: 'href',
    //   type: 'url',
    //   title: 'Link',
    //   description: 'Provide a link if selecting an existing is not relevant here',
    //   validation: Rule => Rule.custom((href, context) => {
    //     return documentValidation(href, context.document.document)
    //   }).warning()
    // },
  ]
}

