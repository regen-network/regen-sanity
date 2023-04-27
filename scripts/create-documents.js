import { run } from './utils';

const initialQueries = process.argv.slice(2).map(docType => ({
  query: `*[_type == '${docType}']`,
}));

run(initialQueries);
