# Regen Sanity

This is the [Sanity](https://sanity.io/) Studio for editing content on Regen Registry and Regen website.

## Setup

1. Install dependencies using `yarn`.
2. Install sanity-cli globally using `npm install -g @sanity/cli`.

## Development

1. Run `yarn start` to start the studio locally.
2. When adding new documents or objects to the schema, make sure to import them from `schemas/schemas.js`. In case of documents, you'll also need to make sure to add them to the appropriate list in `deskStructure` so it gets displayed on the Studio, whether it's as part under "Registry", "Website" or "Shared".
3. You might also need to change `__experimental_actions` field. When creating a new document you will need the `create` action to add a new entry in the local studio. This action should be commented back after to prevent having more than one entry for a document.

**NOTE**: if changes have been made in the CMS since the last deploy, you should run `yarn import-production` to import the latest data before making changes locally

## Datasets and environments

We have currently 2 [datasets](https://www.sanity.io/docs/datasets):

- **staging**: used in development (both for running Sanity Studio locally and used to fetch Sanity content from the Registry app). It should be used for the Registry app deploy previews too after we merge https://github.com/regen-network/regen-web/pull/699 (this is configurable from https://github.com/regen-network/regen-web/blob/master/netlify.toml)
- **production**: used in production from https://regen.sanity.studio/desk. Since we are using [built-in Sanity hosting solution](https://www.sanity.io/docs/deployment#bd4e07db3e37), we can only have one Studio available. Once we [update to V3](https://www.sanity.io/blog/sanity-studio-v3-developer-preview), we might want to host our own solution to have deploy previews for the studio itself as well. In the mean time, we could use the [Spaces](https://www.sanity.io/docs/spaces) experimental feature to switch between datasets in the Studio.

## Deploy Scripts

- `yarn import-production` - pull production changes into the staging environment
- `yarn deploy-staging` - deploy local changes to the staging GraphQL server and playground

```sh
yarn import-production
```

## Deployment

### GraphQL

When updating the schema in development, we might need to deploy this new schema to the GraphQL API regularly in order to use this updated version when fetching content from the Registry app or the website locally:

```sh
yarn deploy-staging
```

The GraphQL playground for staging dataset is available from https://jm12rn9t.api.sanity.io/v1/graphql/staging/default
There's another playground for production dataset at https://jm12rn9t.api.sanity.io/v1/graphql/production/default

These can be used for querying, but not mutations (see sanity's [docs](https://www.sanity.io/docs/migrating-data) on migrations)

### Deploying to production

When merging a PR, we have a Github workflow defined to deploy the latest changes to the [main studio](https://regen.sanity.studio/desk) automatically.

After merging a PR into the `main` branch, make sure to run:

```sh
yarn deploy-production
```

This will update the production GraphQL API with latest schema, export the staging dataset and import it into the production dataset, so that data that you've added while in development on the staging dataset can be automatically copied into the production dataset without the need to do it manually. Later on, we can add that to Github workflows too so that it's all handled by CI.

Further resources:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
