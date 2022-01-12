export default {
  title: 'Wallet Address Registration Page',
  name: 'walletAddressRegistrationPage',
  type: 'document',
  fields: [
    {
      title: 'Top Section',
      name: 'topSection',
      type: 'titleBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Instruction Section',
      name: 'instructionSection',
      type: 'titleCustomBody',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Wallet Section',
      name: 'walletSection',
      type: 'walletAddressRegistrationWalletSection',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Form Section',
      name: 'formSection',
      type: 'walletAddressRegistrationFormSection',
      validation: Rule => Rule.required(),
    },
  ],
};
