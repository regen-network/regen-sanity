import { createClient } from '@sanity/client';

const token = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const apiVersion = '2023-03-01';

export const sourceClient = createClient({
  apiVersion,
  projectId,
  dataset: 'staging',
});

export const destinationClient = createClient({
  apiVersion,
  projectId,
  dataset: 'test',
  token,
});
