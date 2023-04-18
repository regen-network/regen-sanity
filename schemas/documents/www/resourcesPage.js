export default {
  name: 'resourcesPage',
  type: 'document',
  title: 'Resources Page',
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'registrySection',
      type: 'resourcesRegistrySection',
      title: 'Registry Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ledgerSection',
      type: 'resourcesLedgerSection',
      title: 'Ledger Section',
      validation: Rule => Rule.required(),
    },
  ],
};
