import { migrate } from '@sanctucompu/sanity-graph-import';
import { createClient } from '@sanity/client';

const token = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const apiVersion = '2023-03-01';

const sourceClient = createClient({
  apiVersion,
  projectId,
  dataset: 'staging',
});

const destinationClient = createClient({
  apiVersion,
  projectId,
  dataset: 'marie-test',
  token,
});

export async function run(initialQueries, setFieldName) {
  const config = {
    source: {
      client: sourceClient,
      initialQueries,
    },
    destination: {
      client: destinationClient,
      deleteData: false,
      setFieldName,
    },
  };

  await migrate(config);
}
