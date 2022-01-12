export default {
  title: 'Community Connect Section',
  name: 'communityConnectSection',
  type: 'object',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Telegram Sub Label',
      name: 'telegramSubLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Telegram Url',
      name: 'telegramUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Twitter Sub-Label',
      name: 'twitterSubLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Twitter Url',
      name: 'twitterUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Discord Sub Label',
      name: 'discordSubLabel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Discord Url',
      name: 'discordUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
