import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'jm12rn9t',
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
});