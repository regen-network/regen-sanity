export default function slugifyToIRI(input) {
  return `https://schema.regen.network#${input
    .replace(/(?:^|\s)\S/g, a => a.toUpperCase())
    .replace(/\s+/g, '')}`;
}
