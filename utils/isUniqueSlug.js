// Custom unique function for iri slugs that only checks the documents of the same type and the same language
export default function isUniqueSlug(slug, context) {
  const { document, getClient } = context
  const docType = document._type;
  const language = document.language || 'en';

  const query = `
    *[_type == $docType && language == $language && iri.current == $iri && _id != $idWithDraftPrefix && _id != $idWithoutDraftPrefix][0]
  `;
  const idWithoutDraftPrefix = document._id.replace(/^drafts\./, '');
  const params = {
    docType,
    language,
    iri: slug,
    idWithoutDraftPrefix,
    idWithDraftPrefix: `drafts.${idWithoutDraftPrefix}`,
  };

  return getClient({ apiVersion: '2023-01-01' })
    .fetch(query, params)
    .then((result) => !result);
}