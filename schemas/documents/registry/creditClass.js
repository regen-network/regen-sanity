import slugifyToIRI from '../../../utils/slugifyToIRI';
import toPlainText from '../../../utils/toPlainText';

export default {
  type: 'document',
  name: 'creditClass',
  title: 'Credit Class',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'customPortableText',
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
          return `${slugifyToIRI(toPlainText(input))}CreditClass`;
        },
      },
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
      description:
        'This will be used in the credit class page url: "/credit-classes/{path}", it can be a generic handle or an on chain credit class id',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'customPortableText',
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'customPortableText',
      description: 'This short description is shown on the Registry Homepage',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Credibility Cards',
      name: 'credibilityCards',
      type: 'array',
      of: [
        {
          type: 'detailsCard',
        },
      ],
    },
    {
      title: 'Ecological Impact',
      name: 'ecologicalImpact',
      type: 'array',
      of: [
        {
          type: 'ecologicalImpactRelation',
        },
      ],
    },
    {
      title: 'Overview Cards',
      name: 'overviewCards',
      type: 'array',
      of: [{ type: 'card' }],
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
      title: 'Buyer',
      name: 'buyer',
      type: 'buyer',
    },
    {
      title: 'Land Steward',
      name: 'landSteward',
      type: 'landSteward',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Program',
      name: 'program',
      type: 'reference',
      to: [{ type: 'program' }],
    },
    {
      title: 'Retirement Label',
      name: 'retirementLabel',
      type: 'string',
    },
    {
      title: 'Retirement Icon',
      name: 'retirementIcon',
      type: 'image',
    },
  ],
};
