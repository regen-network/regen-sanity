export default {
  title: 'Custom Portable Text',
  name: 'customPortableText',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                    allowRelative: true,
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
              {
                title: 'Open in Modal',
                name: 'modal',
                description:
                  'Allow links to be opened in a modal. Requries planning from devs - will not work out of the box and falls back to normal link',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
  ],
};
