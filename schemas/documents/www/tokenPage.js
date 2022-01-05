export default {
  title: 'Token Page',
  name: 'tokenPage',
  type: 'document',
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Token Economics',
      name: 'tokenEconomics',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Info Section',
      name: 'infoSection',
      type: 'tokenInfoSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Pool Section',
      name: 'poolSection',
      type: 'tokenPoolSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Staking Section',
      name: 'stakingSection',
      type: 'titleBodyButton',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Block Explorer Section',
      name: 'blockExplorerSection',
      type: 'titleBodyButton',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Connect Section Header',
      name: 'connectSectionHeader',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Media Cards',
      name: 'mediaCards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'media' }] }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Newsletter Section',
      name: 'newsletterSection',
      type: 'tokenNewsletterSection',
      validation: Rule => Rule.required(),
    },
  ]
}
