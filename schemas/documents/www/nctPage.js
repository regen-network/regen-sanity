export default {
  title: 'NCT Page',
  name: 'nctPage',
  type: 'document',
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Launch Date',
      name: 'launchDate',
      type: 'date',
      description:
        'date of the NCT Liquidity pool launch for countdown timer (NOTE: not currently used)',
    },
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleImageCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Overview Section',
      name: 'overviewSection',
      type: 'nctOverviewSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Token Section',
      name: 'tokenSection',
      type: 'nctTokenSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'titleImageCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Marketplace Section',
      name: 'marketplaceSection',
      type: 'titleImageCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Ledger Section',
      name: 'ledgerSection',
      type: 'nctLedgerSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Media Section',
      name: 'mediaItems',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'media' }] }],
      validation: Rule => Rule.required(),
    },
  ],
};
