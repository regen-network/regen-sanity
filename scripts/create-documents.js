import { migrate } from '@sanctucompu/sanity-graph-import';
import { sourceClient, destinationClient } from './utils';

const initialQueries = process.argv.slice(2).map(docType => ({
  query: `*[_type == '${docType}']`,
}));

async function run() {
  const config = {
    source: {
      client: sourceClient,
      initialQueries,
    },
    destination: {
      client: destinationClient,
      deleteData: false,
    },
  };

  await migrate(config);
}

run();
