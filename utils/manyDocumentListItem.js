import { filterSpanish, filterEnglish } from './filterLanguage';

// Show English and Spanish subfolders for document types with many instances
export default function manyDocumentListItem(S, title, docType) {
  return S.listItem()
    .title(title)
    .child(
      S.list()
      .title(title)
      .items([
        S.listItem()
        .title('English')
        .schemaType(docType)
        .child(S.documentTypeList(docType).title(`${title} (EN)`)
        .filter(filterEnglish(docType))),
        S.listItem()
        .title('Spanish')
        .schemaType(docType)
        .child(S.documentTypeList(docType).title(`${title} (SP)`)
        .filter(filterSpanish(docType)))
      ]),
    );
}