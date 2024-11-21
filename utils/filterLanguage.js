export function filterSpanish(docType) {
  return `_type == "${docType}" && language == "es"`
}

export function filterEnglish(docType) {
  return `_type == "${docType}" && (!defined(language) || language == "en")`
}