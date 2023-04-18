import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';
import { uniqueDocuments } from './uniqueDocuments';

export default defineConfig({
  title: 'regen-sanity',
  projectId: 'jm12rn9t',
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [deskTool({
    structure: deskStructure,
  })],
  schema: {
    types: schemas,
  },
  document: {
    // Removes certain document types from the global “create new” menu in the top left navigation bar
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !uniqueDocuments.includes(templateItem.templateId))
      }
      return prev
    },
    // Disable unpublish, delete, and duplicate actions in the documents actions menu
    actions: (prev, { schemaType }) => {
      if (uniqueDocuments.includes(schemaType)) {
        return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action))
      }
      return prev
    },
  },
});