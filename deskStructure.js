import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import S from '@sanity/desk-tool/structure-builder'

// default implementation by re-exporting
// export const getDefaultDocumentNode = Structure.getDefaultDocumentNode;
// export default Structure.default;

// or manual implementation to use with your own custom desk structure
// export const getDefaultDocumentNode = (props) => {
//     if (props.schemaType === 'myschema') {
//         return S.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
//     }
//     return S.document();
// };

export default () => {
  // const items = Structure.getFilteredDocumentTypeListItems();
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Registry')
        .child(
          S.list()
            .title('Registry')
            .items([
              S.listItem()
                .title('Home')
                .schemaType('homePage')
                .child(
                  S.document()
                    .schemaType('homePage')
                ),
              S.listItem()
                .title('Buyers Page')
                .schemaType('buyersPage')
                .child(
                  S.document()
                    .schemaType('buyersPage')
                ),
              S.listItem()
                .title('Create Credit Class')
                .schemaType('createCreditClassPage')
                .child(
                  S.document()
                    .schemaType('createCreditClassPage')
                ),
              S.listItem()
                .title('Create Methodology')
                .schemaType('createMethodologyPage')
                .child(
                  S.document()
                    .schemaType('createMethodologyPage')
                ),
              S.listItem()
                .title('Land Stewards Page')
                .schemaType('landStewardsPage')
                .child(
                  S.document()
                    .schemaType('landStewardsPage')
                ),
              S.listItem()
                .title('Methodology Review Process')
                .schemaType('methodologyReviewProcessPage')
                .child(
                  S.document()
                    .schemaType('methodologyReviewProcessPage')
                ),
              S.listItem()
                .title('Methodologies')
                .schemaType('methodology')
                .child(
                  S.documentTypeList('methodology')
                    .title('Methodologies')
                ),
              S.listItem()
                .title('Credit Classes')
                .schemaType('creditClass')
                .child(
                  S.documentTypeList('creditClass')
                    .title('Credit Classes')
                ),
            ])
        ),

      // Website
      S.listItem()
        .title('Website')
        .child(
          S.list()
            .title('Website')
            .items([
              S.listItem()
                .title('Home')
                .schemaType('homePageWeb')
                .child(
                  S.document()
                    .schemaType('homePageWeb')
                ),
            ])
        )
      ,

      // Shared
      S.listItem()
        .title('Shared')
        .child(
          S.list()
            .title('Shared')
            .items([
              S.listItem()
                .title('FAQ')
                .schemaType('faq')
                .child(
                  S.documentTypeList('faq')
                    .title('FAQ')
                ),
              S.listItem()
                .title('Documents')
                .schemaType('doc')
                .child(
                  S.documentTypeList('doc')
                    .title('Documents')
                ),
              S.listItem()
                .title('Resources')
                .schemaType('resource')
                .child(
                  S.documentTypeList('resource')
                    .title('Resources')
                ),
              S.listItem()
                .title('Media')
                .schemaType('media')
                .child(
                  S.documentTypeList('media')
                    .title('Media')
                ),
              S.listItem()
                .title('Ecological Impact')
                .schemaType('ecologicalImpact')
                .child(
                  S.documentTypeList('ecologicalImpact')
                    .title('Ecological Impact')
                ),
              S.listItem()
                .title('Ecological Outcomes')
                .schemaType('ecologicalOutcome')
                .child(
                  S.documentTypeList('ecologicalOutcome')
                    .title('Ecological Outcomes')
                ),
              S.listItem()
                .title('Land Management Practices')
                .schemaType('landManagementPractice')
                .child(
                  S.documentTypeList('landManagementPractice')
                    .title('Land Management Practices')
                ),
              S.listItem()
                .title('SDGs')
                .schemaType('sdg')
                .child(
                  S.documentTypeList('sdg')
                    .title('SDGs')
                ),
              S.listItem()
                .title('Tags')
                .schemaType('tag')
                .child(
                  S.documentTypeList('tag')
                    .title('Tags')
                ),
              S.listItem()
                .title('Featured Sections')
                .schemaType('featuredSection')
                .child(
                  S.documentTypeList('featuredSection')
                    .title('Featured Sections')
                ),
            ])
        )
    ])
}