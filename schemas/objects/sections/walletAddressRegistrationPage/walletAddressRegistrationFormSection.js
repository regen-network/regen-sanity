export default {
  title: 'Wallet section',
  name: 'walletAddressRegistrationFormSection',
  type: 'object',
  fields: [
    {
      title: 'Airtable Link',
      name: 'airtableLink',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Recaptcha Message',
      name: 'recaptchaMessage',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}