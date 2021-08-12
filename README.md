# Regen Sanity

This is the [Sanity](https://sanity.io/) Studio for editing content on Regen Registry and Regen website.

## Setup

Install dependencies using `yarn`.

## Development

- Run `yarn start` to start the studio locally.
- new doc -> deskStructure to display it on the Studio UI

## Datasets and environments

We have currently 2 [datasets](https://www.sanity.io/docs/datasets):
- **staging**: used in development (both for running Sanity Studio locally and used to fetch Sanity content from the Registry app). It should be used for the Registry app deploy previews too after we merge https://github.com/regen-network/regen-web/pull/699 (this is configurable from https://github.com/regen-network/regen-web/blob/master/netlify.toml)
- **production**: used in production from https://regen.sanity.studio/desk. Since we are using [built-in Sanity hosting solution](https://www.sanity.io/docs/deployment#bd4e07db3e37), we can only have one Studio available. But later on, we might want to use Netlify for hosting, which would allow us to have deploy previews for the Studio itself as well. In the mean time, we could use the [Spaces](https://www.sanity.io/docs/spaces) experimental feature to switch between datasets in the Studio.

## Deployment

### GraphQL

When updating the schema in development, we might need to deploy this new schema to the GraphQL API regularly in order to use this updated version when fetching content from the Registry app or the website locally:

```sh
yarn deploy-graphql
```

The GraphQL playground for staging dataset is available from https://jm12rn9t.api.sanity.io/v1/graphql/staging/default

### Deploying to production

When merging a PR, we have a Github workflow defined to deploy the latest changes to the [main studio](https://regen.sanity.studio/desk) automatically.

After merging a PR into the `main` branch, make sure to run:

```sh
yarn deploy
```

This will update the production GraphQL API with latest schema, export the staging dataset and import it into the production dataset, so that data that you've added while in development on the staging dataset can be automatically copied into the production dataset without the need to do it manually. Later on, we can add that to Github workflows so that it's all handled by CI.

Further resources:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
