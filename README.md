# Regen Sanity

This is the [Sanity](https://sanity.io/) Studio for editing content on Regen Registry and Regen website.

## Setup

1. Install dependencies using `yarn`.
2. Install sanity-cli globally using `npm install -g @sanity/cli`.

## Datasets and environments

We have currently 2 [datasets](https://www.sanity.io/docs/datasets):

- **staging**: used in development (both for running Sanity Studio locally and used to fetch Sanity content from the Registry app locally and from Netlify deploy previews).
- **production**: used in production from <https://regen.sanity.studio/desk>. We are using [built-in Sanity hosting solution](https://www.sanity.io/docs/deployment#bd4e07db3e37), so we only have one Studio available.

## Development

0. Create `.env.local` based on `.env`, you can get a `SANITY_TOKEN` from the Sanity dashboard.
1. Run `yarn dev` to start the studio locally.
2. When adding new documents or objects to the schema, make sure to import them from `schemas/schemas.js`. In case of documents, you'll also need to make sure to add them to the appropriate list in `deskStructure` so it gets displayed on the Studio, whether it's as part under "Registry", "Website" or "Shared".
3. If you want a document to be unique (like website/app pages), you can add its name to the list in `uniqueDocuments.js`, once you created a first instance of it.
4. The following command exports the production dataset and imports it into the staging dataset. This should be executed before starting any new feature development to keep the staging dataset up-to-date with the latest changes from production (likely applied by content editors, and not developers).

```sh
yarn import-production
```

:warning: This should not be executed during or directly after development of new features because since it's using `--replace` to import production into staging dataset, this might overwrite some of your content changes.

## Deployment

### Deploying GraphQL in development

When updating the schema in development, we might need to deploy this new schema to the GraphQL API regularly in order to use this updated version when fetching content from the Registry app or the website locally:

```sh
yarn deploy-graphql:staging
```

The GraphQL playground for staging dataset is available from <https://jm12rn9t.api.sanity.io/v1/graphql/staging/default>.
There's another playground for production dataset at <https://jm12rn9t.api.sanity.io/v1/graphql/production/default>.

These can be used for querying, but not mutations (see sanity's [docs](https://www.sanity.io/docs/migrating-data) on migrations).

Sanity provides a way to [deploy a GraphQL API to different "tags"](https://www.sanity.io/docs/graphql#e2e900be2233), using the same underlying dataset:

```sh
yarn deploy-graphql:staging --tag example
```

This is useful when developing features with breaking changes so this doesn't break the `default` GraphQL tagged endpoint that is used in our deploy previews and [dev app](https://dev.app.regen.network/).

Don't forget to undeploy the tagged GraphQL API once it's not needed anymore:

```sh
npx sanity graphql undeploy --dataset staging --tag example
```

### Deploying to production

When merging a PR, we have a Github workflow defined to deploy the latest changes to the [main studio](https://regen.sanity.studio/desk) and the production GraphQL API.

After merging a PR into the `main` branch, you might also want to import certain documents or parts of documents that you have created/updated during development from the staging dataset into the production dataset.
There are a few scripts set up to do that automatically so you don't have to copy the content again manually:

#### To create new documents

```sh
yarn create-documents documentTypeName1 documentTypeName2
```

This might be useful if you created brand new documents or re-arranged existing ones extensively and you don't care about the existing documents.

:warning: Be mindful about not using an existing document name, unless you explicitly want it, otherwise it will replace its instances since it's using [`createOrReplace` mutation](https://www.sanity.io/docs/http-mutations#95bb692d7fb0).

This also traverses through all referenced documents, find all assets used by any of these documents in the staging dataset, then add them to the production dataset. But the depth of graph traversal is limited to 1 for now so if you want to add documents with deeper references, they will have to be specified manually in the document types list as first items.

#### To patch existing documents

```sh
yarn patch-document documentTypeName fieldName
```

This might be useful if you add a new field to a document type.
Under the hood, this uses [`set` within a `patch` mutation](https://www.sanity.io/docs/http-patches#6TPENSW3).

Those scripts use [our fork](https://github.com/regen-network/sanity-graph-import) of [@sanctuarycomputer/sanity-graph-import](https://github.com/sanctuarycomputer/sanity-graph-import), which adds the ability to not only create documents but also patch existing ones.

Further resources:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
