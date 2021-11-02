
export default {
  name: 'developersPage',
  type: 'document',
  title: 'Developers Page',
  __experimental_actions: ['update', 'create', /*'delete', */ 'publish'],
  fields: [
    {
      name: 'topSection',
      type: 'titleBody',
      title: 'Top Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'approachSection',
      type: 'devApproachSection',
      title: 'Approach Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'involvedSectionHeader',
      type: 'string',
      title: 'Involved Section Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ledgerSection',
      type: 'devLedgerSection',
      title: 'Ledger Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'openAgSection',
      type: 'devOpenAgSection',
      title: 'Open Ag Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'connectSectionHeader',
      type: 'string',
      title: 'Connect Section Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'careersSection',
      type: 'devCareersSection',
      title: 'Connect Section Header',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testnetSection',
      type: 'devTestnetSection',
      title: 'Testnet Section',
      validation: Rule => Rule.required(),
    },
  ],
};