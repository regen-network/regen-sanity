import manyDocumentListItem from './utils/manyDocumentListItem';

export default S =>
  S.list()
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
                .title('Create Credit Class Page')
                .schemaType('createCreditClassPage')
                .child(S.document().schemaType('createCreditClassPage')),
              S.listItem()
                .title('Create Methodology Page')
                .schemaType('createMethodologyPage')
                .child(S.document().schemaType('createMethodologyPage')),
              S.listItem()
                .title('Create Project Page')
                .schemaType('createProjectPage')
                .child(S.document().schemaType('createProjectPage')),
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
                .title('Profile Page')
                .schemaType('profilePage')
                .child(S.document().schemaType('profilePage')),
              S.listItem()
                .title('Bridge Page')
                .schemaType('bridgePage')
                .child(S.document().schemaType('bridgePage')),
              manyDocumentListItem(S, 'Methodologies', 'methodology'),
              manyDocumentListItem(S, 'Credit Classes', 'creditClass'),
              S.listItem()
                .title('Basket Details Page')
                .schemaType('basketDetailsPage')
                .child(S.document().schemaType('basketDetailsPage')),
              S.listItem()
                .title('Buy Modal Options')
                .schemaType('buyModalOptions')
                .child(S.document().schemaType('buyModalOptions')),
              S.listItem()
                .title('Buy Modal')
                .schemaType('buyModal')
                .child(S.document().schemaType('buyModal')),
              S.listItem()
                .title('Credit Class Page')
                .schemaType('creditClassPage')
                .child(S.document().schemaType('creditClassPage')),
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
                .title('Buyers Page')
                .schemaType('buyersPage')
                .child(S.document().schemaType('buyersPage')),
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
              manyDocumentListItem(S, 'Case Study Pages', 'caseStudyPage'),
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
              manyDocumentListItem(S, 'FAQs', 'faq'),
              manyDocumentListItem(S, 'Documents', 'doc'),
              manyDocumentListItem(S, 'Resources', 'resource'),
              manyDocumentListItem(S, 'Media', 'media'),
              manyDocumentListItem(S, 'Ecological Impact', 'ecologicalImpact'),
              manyDocumentListItem(S, 'Ecological Outcomes', 'ecologicalOutcome'),
              manyDocumentListItem(S, 'Land Management Practices', 'landManagementPractice'),
              manyDocumentListItem(S, 'SDGs', 'sdg'),
              manyDocumentListItem(S, 'Tags', 'tag'),
              manyDocumentListItem(S, 'Featured Sections', 'featuredSection'),
              manyDocumentListItem(S, 'Team Members', 'regenTeamMember'),
              manyDocumentListItem(S, 'Resources for Getting Started Sections', 'gettingStartedResourcesSection'),
              manyDocumentListItem(S, 'Resources for Getting Started Cards', 'gettingStartedResourcesCard'),
              manyDocumentListItem(S, 'Sold out projects', 'soldOutProjects'),
              manyDocumentListItem(S, 'Credit Categories', 'creditCategory'),
              manyDocumentListItem(S, 'Credit Types', 'creditType'),
              manyDocumentListItem(S, 'Credit Certifications', 'creditCertification'),
              manyDocumentListItem(S, 'Ecological Credit Cards', 'ecologicalCreditCard'),
              manyDocumentListItem(S, 'Offset Methods', 'offsetMethod'),
              manyDocumentListItem(S, 'Project Activities', 'projectActivity'),
              manyDocumentListItem(S, 'Project Ecosystems', 'projectEcosystem'),
              manyDocumentListItem(S, 'Project Ratings', 'projectRating'),
              manyDocumentListItem(S, 'Projects', 'project'),
              manyDocumentListItem(S, 'Credit Class Prefinance Timeline Statuses', 'classPrefinanceTimelineStatus'),
              manyDocumentListItem(S, 'Project Prefinance Timeline Statuses', 'projectPrefinanceTimelineStatus'),
              manyDocumentListItem(S, 'Featured Project Cards', 'featuredProjectCard'),
              manyDocumentListItem(S, 'Partners', 'partner'),
              manyDocumentListItem(S, 'Stat Cards', 'statCard'),
              manyDocumentListItem(S, 'Claims', 'claim'),
              manyDocumentListItem(S, 'Credibility Cards', 'credibilityCard'),
              manyDocumentListItem(S, 'Persons', 'person'),
              manyDocumentListItem(S, 'Programs', 'program'),
            ]),
        ),
      // Terrasos
      S.listItem()
        .title('Terrasos')
        .child(
          S.list()
            .title('Terrasos')
            .items([
              S.listItem()
                .title('Tebu Banner')
                .schemaType('tebuBanner')
                .child(S.document().schemaType('tebuBanner')),
              manyDocumentListItem(S, 'Terrasos Projects', 'terrasosProject'),
              S.listItem()
                .title('Compliance Info')
                .schemaType('complianceInfo')
                .child(S.document().schemaType('complianceInfo')),
            ]),
        ),
    ]);
