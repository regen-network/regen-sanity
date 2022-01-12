export default function slugifyToIRI(input) {
  return `http://regen.network/${input
    .replace(/(?:^|\s)\S/g, a => a.toUpperCase())
    .replace(/\s+/g, '')}`;
}
