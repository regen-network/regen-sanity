import slugifyToIRI from "../../../utils/slugifyToIRI";

export default {
  title: 'SDG',
  name: 'sdg',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
     {
      title: 'IRI',
      name: 'iri',
      description: 'This can be generated based on the title',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        slugify: (input) => {
          return slugifyToIRI(input);
        }
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ]
}