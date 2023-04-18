export default {
  name: 'homePageWeb',
  type: 'document',
  title: 'Web Home Page',
  fields: [
    {
      name: 'homeFoldSection',
      type: 'homeFoldSection',
      title: 'Fold Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'marketplaceSection',
      type: 'marketplaceSection',
      title: 'Marketplace Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'homeWebPartnersSection',
      type: 'homeWebPartnersSection',
      title: 'Partners Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'homeWebEcologicalCreditCardsSection',
      type: 'homeWebEcologicalCreditCardsSection',
      title: 'Ecological Credit Cards Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'homeWebStatsSection',
      type: 'homeWebStatsSection',
      title: 'Stats Cards Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bannerTextSection',
      type: 'titleImageCustomBody',
      title: 'Banner Text Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'climateSection',
      type: 'climateSection',
      title: 'Climate Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'carbonPlusSection',
      type: 'carbonPlusSection',
      title: 'Carbon Plus Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ledgerDescription',
      type: 'text',
      title: 'Ledger Section Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'valuesSection',
      type: 'homeValuesSection',
      title: 'Values Section',
      validation: Rule => Rule.required(),
    },
  ],
};
