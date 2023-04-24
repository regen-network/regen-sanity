import { run } from './utils';

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('You should provide the document type name and the field name to be set.');
  process.exit(1);
}

const initialQueries = [{
  query: `*[_type == '${args[0]}']`,
}];

run(initialQueries, args[1]);
