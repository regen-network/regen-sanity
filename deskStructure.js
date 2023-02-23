import * as Structure from 'sanity-plugin-intl-input/lib/structure';
import S from '@sanity/desk-tool/structure-builder';

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
                .child(S.document().schemaType('homePage')),
              S.listItem()
                .title('Buyers Page')
                .schemaType('buyersPage')
                .child(S.document().schemaType('buyersPage')),
              S.listItem()
                .title('Create Credit Class Page')
                .schemaType('createCreditClassPage')
                .child(S.document().schemaType('createCreditClassPage')),
              S.listItem()
                .title('Create Methodology Page')
                .schemaType('createMethodologyPage')
                .child(S.document().schemaType('createMethodologyPage')),
              S.listItem()
                .title('Land Stewards Page')
                .schemaType('landStewardsPage')
                .child(S.document().schemaType('landStewardsPage')),
              S.listItem()
                .title('Methodology Review Process Page')
                .schemaType('methodologyReviewProcessPage')
                .child(S.document().schemaType('methodologyReviewProcessPage')),
              S.listItem()
                .title('Projects Page')
                .schemaType('projectsPage')
                .child(S.document().schemaType('projectsPage')),
              S.listItem()
                .title('Project Page')
                .schemaType('projectPage')
                .child(S.document().schemaType('projectPage')),
              S.listItem()
                .title('Bridge Page')
                .schemaType('bridgePage')
                .child(S.document().schemaType('bridgePage')),
              S.listItem()
                .title('Methodologies')
                .schemaType('methodology')
                .child(S.documentTypeList('methodology').title('Methodologies')),
              S.listItem()
                .title('Credit Classes')
                .schemaType('creditClass')
                .child(S.documentTypeList('creditClass').title('Credit Classes')),
              S.listItem()
                .title('Basket Details Page')
                .schemaType('basketDetailsPage')
                .child(S.document().schemaType('basketDetailsPage')),
            ]),
        ),

      // Website
      S.listItem()
        .title('Website')
        .child(
          S.list()
            .title('Website')
            .items([
              S.listItem()
                .title('Home Page')
                .schemaType('homePageWeb')
                .child(S.document().schemaType('homePageWeb')),
              S.listItem()
                .title('Developers Page')
                .schemaType('developersPage')
                .child(S.document().schemaType('developersPage')),
              S.listItem()
                .title('Mainnet Page')
                .schemaType('mainnetPage')
                .child(S.document().schemaType('mainnetPage')),
              S.listItem()
                .title('Shared Sections')
                .schemaType('sharedSections')
                .child(S.document().schemaType('sharedSections')),
              S.listItem()
                .title('Case Studies Page')
                .schemaType('caseStudiesPage')
                .child(S.document().schemaType('caseStudiesPage')),
              S.listItem()
                .title('Case Study Pages')
                .schemaType('caseStudyPage')
                .child(S.documentTypeList('caseStudyPage').title('case study page')),
              S.listItem()
                .title('Community Page')
                .schemaType('communityPage')
                .child(S.document().schemaType('communityPage')),
              S.listItem()
                .title('Contact Page')
                .schemaType('contactPage')
                .child(S.document().schemaType('contactPage')),
              S.listItem()
                .title('FAQ Page')
                .schemaType('faqPage')
                .child(S.document().schemaType('faqPage')),
              S.listItem()
                .title('Fund Page')
                .schemaType('fundPage')
                .child(S.document().schemaType('fundPage')),
              S.listItem()
                .title('Partners Page')
                .schemaType('partnersPage')
                .child(S.document().schemaType('partnersPage')),
              S.listItem()
                .title('Presskit Page')
                .schemaType('presskitPage')
                .child(S.document().schemaType('presskitPage')),
              S.listItem()
                .title('Resources Page')
                .schemaType('resourcesPage')
                .child(S.document().schemaType('resourcesPage')),
              S.listItem()
                .title('Science Page')
                .schemaType('sciencePage')
                .child(S.document().schemaType('sciencePage')),
              S.listItem()
                .title('Team Page')
                .schemaType('teamPage')
                .child(S.document().schemaType('teamPage')),
              S.listItem()
                .title('Token Page')
                .schemaType('tokenPage')
                .child(S.document().schemaType('tokenPage')),
              S.listItem()
                .title('Validators Page')
                .schemaType('validatorsPage')
                .child(S.document().schemaType('validatorsPage')),
              S.listItem()
                .title('Wallet Address Registration Page')
                .schemaType('walletAddressRegistrationPage')
                .child(S.document().schemaType('walletAddressRegistrationPage')),
              S.listItem()
                .title('rNCT Page')
                .schemaType('nctPage')
                .child(S.document().schemaType('nctPage')),
            ]),
        ),
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
                .child(S.documentTypeList('faq').title('FAQ')),
              S.listItem()
                .title('Documents')
                .schemaType('doc')
                .child(S.documentTypeList('doc').title('Documents')),
              S.listItem()
                .title('Resources')
                .schemaType('resource')
                .child(S.documentTypeList('resource').title('Resources')),
              S.listItem()
                .title('Media')
                .schemaType('media')
                .child(S.documentTypeList('media').title('Media')),
              S.listItem()
                .title('Ecological Impact')
                .schemaType('ecologicalImpact')
                .child(S.documentTypeList('ecologicalImpact').title('Ecological Impact')),
              S.listItem()
                .title('Ecological Outcomes')
                .schemaType('ecologicalOutcome')
                .child(
                  S.documentTypeList('ecologicalOutcome').title('Ecological Outcomes'),
                ),
              S.listItem()
                .title('Land Management Practices')
                .schemaType('landManagementPractice')
                .child(
                  S.documentTypeList('landManagementPractice').title(
                    'Land Management Practices',
                  ),
                ),
              S.listItem()
                .title('SDGs')
                .schemaType('sdg')
                .child(S.documentTypeList('sdg').title('SDGs')),
              S.listItem()
                .title('Tags')
                .schemaType('tag')
                .child(S.documentTypeList('tag').title('Tags')),
              S.listItem()
                .title('Featured Sections')
                .schemaType('featuredSection')
                .child(S.documentTypeList('featuredSection').title('Featured Sections')),
              S.listItem()
                .title('Team Members')
                .schemaType('regenTeamMember')
                .child(S.documentTypeList('regenTeamMember').title('Team Members')),
              S.listItem()
                .title('Resources for Getting Started Sections')
                .schemaType('gettingStartedResourcesSection')
                .child(
                  S.documentTypeList('gettingStartedResourcesSection').title(
                    'Resources for Getting Started Sections',
                  ),
                ),
              S.listItem()
                .title('Resource for Getting Started Cards')
                .schemaType('gettingStartedResourcesCard')
                .child(
                  S.documentTypeList('gettingStartedResourcesCard').title(
                    'Resource for Getting Started Cards',
                  ),
                ),
              S.listItem()
                .title('Sold out projects')
                .schemaType('soldOutProjects')
                .child(S.documentTypeList('soldOutProjects').title('Sold out projects')),
              S.listItem()
                .title('Credit Type')
                .schemaType('creditType')
                .child(S.documentTypeList('creditType').title('Credit Type')),
              S.listItem()
                .title('Ecological Credit Card')
                .schemaType('ecologicalCreditCard')
                .child(
                  S.documentTypeList('ecologicalCreditCard').title(
                    'Ecological Credit Card',
                  ),
                ),
              S.listItem()
                .title('Offset Method')
                .schemaType('offsetMethod')
                .child(S.documentTypeList('offsetMethod').title('Offset Method')),
              S.listItem()
                .title('Project Activity')
                .schemaType('projectActivity')
                .child(S.documentTypeList('projectActivity').title('Project Activity')),
              S.listItem()
                .title('Project')
                .schemaType('project')
                .child(S.documentTypeList('project').title('Project')),
              S.listItem()
                .title('Featured Project Card')
                .schemaType('featuredProjectCard')
                .child(
                  S.documentTypeList('featuredProjectCard').title(
                    'Featured Project Card',
                  ),
                ),
              S.listItem()
                .title('Partner')
                .schemaType('partner')
                .child(S.documentTypeList('partner').title('Partner')),
            ]),
        ),
    ]);
};
