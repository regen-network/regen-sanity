export default {
  title: 'Wallet section',
  name: 'walletAddressRegistrationWalletSection',
  type: 'object',
  fields: [
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Wallet found Button Text',
      name: 'walletFoundButtonText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'No wallet found message',
      name: 'noWalletFound',
      type: 'customPortableText',
      validation: Rule => Rule.required(),
    },
  ],
}
