import slugifyToIRI from "../../../utils/slugifyToIRI";

export default {
  title: 'SDG',
  name: 'sdg',
  type: 'document',
  fields: [
    {
      title: 'IRI',
      name: 'iri',
      type: 'slug',
      hidden: true,
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        slugify: (input) => {
          return slugifyToIRI(input);
        }
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ]
}