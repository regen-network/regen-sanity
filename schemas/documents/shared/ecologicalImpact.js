import slugifyToIRI from '../../../utils/slugifyToIRI';

export default {
  title: 'Ecological Impact',
  name: 'ecologicalImpact',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'IRI',
      name: 'iri',
      description: 'This can be generated based on the name',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        slugify: input => {
          return slugifyToIRI(input);
        },
      },
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
    {
      title: 'SDGs',
      name: 'sdgs',
      type: 'array',
      description: 'Select existing SDGs from "Shared" content',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sdg' }],
        },
      ],
    },
    {
      title: 'Standard',
      name: 'standard',
      type: 'customImage',
    },
  ],
};
