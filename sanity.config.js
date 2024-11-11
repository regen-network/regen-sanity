import { documentInternationalization } from '@sanity/document-internationalization';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { assist } from '@sanity/assist';
import deskStructure from './deskStructure';
import schemas, { documentsSchemas } from './schemas/schema';
import { uniqueDocuments } from './uniqueDocuments';
import { languages } from './languages';

const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: documentsSchemas.map(schema => schema.name),
    }),
    assist(),
  ],
  schema: {
    types: schemas,
  },
  document: {
    // Removes certain document types from the global “create new” menu in the top left navigation bar
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          templateItem => !uniqueDocuments.includes(templateItem.templateId),
        );
      }
      return prev;
    },
    // Disable unpublish, delete, and duplicate actions in the documents actions menu
    actions: (prev, { schemaType }) => {
      if (uniqueDocuments.includes(schemaType)) {
        return prev.filter(
          ({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action),
        );
      }
      return prev;
    },
  },
};

export default defineConfig([
  {
    title: 'regen-sanity',
    // The default dataset will be set to production in the deployed studio (see .env.production)
    // but it will usually be staging in local dev for easier access.
    dataset: process.env.SANITY_STUDIO_DATASET,
    name: 'default-workspace',
    basePath: '/default',
    ...config,
  },
  {
    title: 'regen-sanity-staging',
    // The secondary workspace always uses the staging dataset.
    // This is primarily useful for content editors to edit content on staging
    // from the deployed studio when needed.
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/staging',
    ...config,
  },
]);
