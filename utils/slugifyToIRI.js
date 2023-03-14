export default function slugifyToIRI(input) {
  return `regen:${input
    .replace(/(?:^|\s)\S/g, a => a.toUpperCase())
    .replace(/\s+/g, '')}`;
}
