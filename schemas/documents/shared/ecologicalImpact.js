import slugifyToIRI from "../../../utils/slugifyToIRI";

export default {
  title: 'Ecological Impact',
  name: 'ecologicalImpact',
  type: 'document',
  fields: [
    {
      title: 'IRI',
      name: 'iri',
      type: 'slug',
      hidden: true,
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        slugify: (input) => {
          return slugifyToIRI(input);
        }
      },
    },
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
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
  ]
}