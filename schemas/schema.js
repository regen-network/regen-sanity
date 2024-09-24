import { defineField } from 'sanity';

// document schemas
import homePage from './documents/registry/homePage';
import homePageWeb from './documents/www/homePageWeb';
import createCreditClassPage from './documents/registry/createCreditClassPage';
import createMethodologyPage from './documents/registry/createMethodologyPage';
import createProjectPage from './documents/registry/createProjectPage';
import developersPage from './documents/www/developersPage';
import methodologyReviewProcessPage from './documents/registry/methodologyReviewProcessPage';
import methodology from './documents/registry/methodology';
import creditClass from './documents/registry/creditClass';
import creditClassPage from './documents/registry/creditClassPage';
import landStewardsPage from './documents/registry/landStewardsPage';
import buyersPage from './documents/www/buyersPage';
import mainnetPage from './documents/www/mainnetPage';
import profilePage from './documents/registry/profilePage';
import projectsPage from './documents/registry/projectsPage';
import projectPage from './documents/registry/projectPage';
import bridgePage from './documents/registry/bridgePage';
import basketDetailsPage from './documents/registry/basketDetailsPage';
import buyModal from './documents/registry/buyModal';
import buyModalOptions from './documents/registry/buyModalOptions';
import resource from './documents/shared/resource';
import faq from './documents/shared/faq';
import document from './documents/shared/document';
import ecologicalImpact from './documents/shared/ecologicalImpact';
import media from './documents/shared/media';
import sdg from './documents/shared/sdg';
import ecologicalOutcome from './documents/shared/ecologicalOutcome';
import landManagementPractice from './documents/shared/landManagementPractice';
import tag from './documents/shared/tag';
import featuredSection from './documents/shared/featuredSection';
import gettingStartedResourcesSection from './documents/shared/gettingStartedResourcesSection';
import gettingStartedResourcesCard from './documents/shared/gettingStartedResourcesCard';
import soldOutProjects from './documents/shared/soldOutProjects';
import creditType from './documents/shared/creditType';
import ecologicalCreditCard from './documents/shared/ecologicalCreditCard';
import offsetMethod from './documents/shared/offsetMethod';
import projectActivity from './documents/shared/projectActivity';
import projectEcosystem from './documents/shared/projectEcosystem';
import creditCertification from './documents/shared/creditCertification';
import projectRating from './documents/shared/projectRating';
import project from './documents/shared/project';
import featuredProjectCard from './documents/shared/featuredProjectCard';
import partner from './documents/shared/partner';
import statCard from './documents/shared/statCard';
import claim from './documents/shared/claim';
import credibilityCard from './documents/shared/credibilityCard';
import person from './documents/shared/person';
import program from './documents/shared/program';
import classPrefinanceTimelineStatus from './documents/shared/classPrefinanceTimelineStatus';
import projectPrefinanceTimelineStatus from './documents/shared/projectPrefinanceTimelineStatus';
import sharedSections from './documents/www/sharedSections';
import caseStudiesPage from './documents/www/caseStudiesPage';
import caseStudyPage from './documents/www/caseStudyPage';
import communityPage from './documents/www/communityPage';
import partnersPage from './documents/www/partnersPage';
import presskitPage from './documents/www/presskitPage';
import resourcesPage from './documents/www/resourcesPage';
import sciencePage from './documents/www/sciencePage';
import teamPage from './documents/www/teamPage';
import tokenPage from './documents/www/tokenPage';
import walletAddressRegistrationPage from './documents/www/walletAddressRegistrationPage';
import nctPage from './documents/www/nctPage';
import creditCategory from './documents/shared/creditCategory';

export const documentsSchemas = [
  homePage,
  homePageWeb,
  createCreditClassPage,
  createMethodologyPage,
  createProjectPage,
  developersPage,
  methodologyReviewProcessPage,
  methodology,
  creditClass,
  creditClassPage,
  landStewardsPage,
  buyersPage,
  mainnetPage,
  profilePage,
  projectsPage,
  projectPage,
  bridgePage,
  basketDetailsPage,
  buyModal,
  buyModalOptions,
  resource,
  faq,
  document,
  ecologicalImpact,
  media,
  sdg,
  ecologicalOutcome,
  landManagementPractice,
  tag,
  featuredSection,
  gettingStartedResourcesSection,
  gettingStartedResourcesCard,
  soldOutProjects,
  creditType,
  ecologicalCreditCard,
  offsetMethod,
  projectActivity,
  projectEcosystem,
  creditCertification,
  projectRating,
  project,
  featuredProjectCard,
  partner,
  statCard,
  claim,
  credibilityCard,
  person,
  program,
  classPrefinanceTimelineStatus,
  projectPrefinanceTimelineStatus,
  sharedSections,
  caseStudiesPage,
  caseStudyPage,
  communityPage,
  partnersPage,
  presskitPage,
  resourcesPage,
  sciencePage,
  teamPage,
  tokenPage,
  walletAddressRegistrationPage,
  nctPage,
  creditCategory,
];

// Object types
import heroSection from './objects/sections/heroSection';
import stepCardSection from './objects/sections/stepCardSection';
import basicStepCardSection from './objects/sections/basicStepCardSection';
import fullStepCardSection from './objects/sections/fullStepCardSection';
import createMethodologyStepCardSection from './objects/sections/createMethodologyStepCardSection';
import creditTypeSection from './objects/sections/creditTypeSection';
import reviewSection from './objects/sections/reviewSection';
import connectSection from './objects/sections/connectSection';
import imageItemsSection from './objects/sections/imageItemsSection';
import dualImageSection from './objects/sections/dualImageSection';
import practicesOutcomesSection from './objects/sections/practicesOutcomesSection';
import timelineSection from './objects/sections/timelineSection';
import imageGridSection from './objects/sections/imageGridSection';
import detailsSection from './objects/sections/detailsSection';
import detailsCard from './objects/detailsCard';
import quoteSection from './objects/sections/buyersPage/quoteSection';
import quoteText from './objects/sections/buyersPage/quoteText';
import stepCard from './objects/stepCard';
import bottomBanner from './objects/bottomBanner';
import card from './objects/cards/card';
import pageMetadata from './objects/pageMetadata';
import customPortableText from './objects/customPortableText';
import bannerCard from './objects/cards/bannerCard';
import button from './objects/button';
import customImage from './objects/customImage';
import link from './objects/link';
import ecologicalImpactRelation from './objects/ecologicalImpactRelation';
import documentation from './objects/documentation';
import buyer from './objects/buyer';
import landSteward from './objects/landSteward';
import connectSectionLink from './objects/connectSectionLink';
import imageBoldTextLabel from './objects/templates/imageBoldTextLabel';
import imageGridItem from './objects/imageGridItem';
import timelineItem from './objects/timelineItem';
import titleBody from './objects/templates/titleBody';
import bodyGreenTextWithPopover from './objects/bodyGreenTextWithPopover';
import marketplaceSection from './objects/sections/homePageWeb/marketplaceSection';
import callToAction from './objects/callToAction';
import climateSection from './objects/sections/homePageWeb/climateSection';
import carbonPlusSection from './objects/sections/homePageWeb/carbonPlusSection';
import homeValuesSection from './objects/sections/homePageWeb/homeValuesSection';
import valuesImageItem from './objects/sections/homePageWeb/valuesImageItem';
import devApproachSection from './objects/sections/developerPage/devApproachSection';
import devLedgerSection from './objects/sections/developerPage/devLedgerSection';
import devOpenAgSection from './objects/sections/developerPage/devOpenAgSection';
import devCareersSection from './objects/sections/developerPage/devCareersSection';
import devTestnetSection from './objects/sections/developerPage/devTestnetSection';
import homeFoldSection from './objects/sections/homePageWeb/homeFoldSection';
import titleCustomBody from './objects/templates/titleCustomBody';
import mainnetLaunchInfoSection from './objects/sections/mainnetPage/mainnetLaunchInfoSection';
import mainnetActionItem from './objects/sections/mainnetActionItem';
import mainnetWhatsNextSection from './objects/sections/mainnetPage/mainnetWhatsNextSection';
import mainnetInfoItem from './objects/sections/mainnetInfoItem';
import blogSection from './objects/sections/blogSection';
import blogPost from './objects/blogPost';
import caseStudyAboutSection from './objects/sections/caseStudyPage/caseStudyAboutSection';
import caseStudyApproachSection from './objects/sections/caseStudyPage/caseStudyApproachSection';
import caseStudyBottomSection from './objects/sections/caseStudyPage/caseStudyBottomSection';
import caseStudyConclusionSection from './objects/sections/caseStudyPage/caseStudyConclusionSection';
import caseStudyContextSection from './objects/sections/caseStudyPage/caseStudyContextSection';
import caseStudyFigureSection from './objects/sections/caseStudyPage/caseStudyFigureSection';
import caseStudyFundingSection from './objects/sections/caseStudyPage/caseStudyFundingSection';
import caseStudyFigure from './objects/sections/caseStudyFigure';
import caseStudiesListSection from './objects/sections/caseStudiesPage/caseStudiesListSection';
import caseStudiesAboutSection from './objects/sections/caseStudiesPage/caseStudiesAboutSection';
import caseStudiesContextSection from './objects/sections/caseStudiesPage/caseStudiesContextSection';
import caseStudiesApproachSection from './objects/sections/caseStudiesPage/caseStudiesApproachSection';
import caseStudiesFundingSection from './objects/sections/caseStudiesPage/caseStudiesFundingSection';
import imageWithTitle from './objects/imageWithTitle';
import communityConnectSection from './objects/sections/communityPage/communityConnectSection';
import communityGoToSection from './objects/sections/communityPage/communityGoToSection';
import communityCollectiveSection from './objects/sections/communityPage/communityCollectiveSection';
import communityCollaborateSection from './objects/sections/communityPage/communityCollaborateSection';
import resourcesCard from './objects/resourcesCard';
import contactPage from './documents/www/contactPage';
import requestType from './objects/requestType';
import titleImageCustomBody from './objects/templates/titleImageCustomBody';
import titleImage from './objects/templates/titleImage';
import faqPage from './documents/www/faqPage';
import faqCategory from './objects/faqCategory';
import fundPage from './documents/www/fundPage';
import fundCallToAction from './objects/fundCallToAction';
import partnerLogo from './objects/partnerLogo';
import presskitFeaturedSection from './objects/sections/presskit/presskitFeaturedSection';
import presskitAwardsSection from './objects/sections/presskit/presskitAwardsSection';
import titleImageLink from './objects/templates/titleImageLink';
import presskitTimelineItem from './objects/presskitTimelineItem';
import presskitTimelineSection from './objects/sections/presskit/presskitTimelineSection';
import presskitTeamSection from './objects/sections/presskit/presskitTeamSection';
import projectPrefinancing from './objects/projectPrefinancing';
import nameTitleImage from './objects/templates/nameTitleImage';
import presskitLogosSection from './objects/sections/presskit/presskitLogosSection';
import presskitPhotosSection from './objects/sections/presskit/presskitPhotosSection';
import regenTeamMember from './objects/sections/regenTeamMember';
import resourcesSection from './objects/sections/resourcesPage/resourcesSection';
import scienceOpenScienceSection from './objects/sections/sciencePage/scienceOpenScienceSection';
import imageCustomBody from './objects/templates/imageCustomBody';
import sciencePartnershipSection from './objects/sections/sciencePage/sciencePartnershipSection';
import scienceCommunitySection from './objects/sections/sciencePage/scienceCommunitySection';
import scienceCommunityMember from './objects/sections/sciencePage/scienceCommunityMember';
import titleImageBody from './objects/templates/titleImageBody';
import scienceTitleDescriptionSection from './objects/sections/sciencePage/scienceTitleDescriptionSection';
import teamSection from './objects/sections/teamPage/teamSection';
import tokenInfoSection from './objects/sections/tokenPage/tokenInfoSection';
import tokenPoolSection from './objects/sections/tokenPage/tokenPoolSection';
import teamStakingSection from './objects/sections/tokenPage/teamStakingSection';
import tokenNewsletterSection from './objects/sections/tokenPage/tokenNewsletterSection';
import titleBodyButton from './objects/templates/titleBodyButton';
import imageLink from './objects/templates/imageLink';
import validatorsPage from './documents/www/validatorsPage';
import validator from './objects/sections/validatorsPage/validator';
import validatorWhoSection from './objects/sections/validatorsPage/validatorWhoSection';
import walletAddressRegistrationWalletSection from './objects/sections/walletAddressRegistrationPage/walletAddressRegistrationWalletSection';
import walletAddressRegistrationFormSection from './objects/sections/walletAddressRegistrationPage/walletAddressRegistrationFormSection';
import seo from './objects/seo';
import nctOverviewSection from './objects/sections/nctPage/nctOverviewSection';
import labeledTextLinkable from './objects/templates/labeledTextLinkable';
import nctTokenSection from './objects/sections/nctPage/nctTokenSection';
import nctLedgerSection from './objects/sections/nctPage/nctLedgerSection';
import homePageTopSection from './objects/sections/homePage/homePageTopSection';
import creditInfos from './objects/creditInfos';
import buyersEcologicalCreditCardsSection from './objects/sections/buyersPage/ecologicalCreditCardsSection';
import buyersFeaturedProjectCardsSection from './objects/sections/buyersPage/featuredProjectCardsSection';
import buyersPartnersSection from './objects/sections/buyersPage/partnersSection';
import actionCard from './objects/cards/actionCard';
import infoCard from './objects/cards/infoCard';
import homeWebPartnersSection from './objects/sections/homePageWeb/partnersSection';
import homeWebEcologicalCreditCardsSection from './objects/sections/homePageWeb/ecologicalCreditCardsSection';
import homeWebStatsSection from './objects/sections/homePageWeb/statsSection';
import homePageProjectsSection from './objects/sections/homePage/homePageProjectsSection';
import projectPrefinanceTimelineItem from './objects/projectPrefinanceTimelineItem';
import classPrefinanceTimelineItem from './objects/classPrefinanceTimelineItem';
import prefinanceTimelineItem from './objects/prefinanceTimelineItem';
import prefinanceProjects from './objects/prefinanceProjects';
import createProjectPagePopup from './objects/createProjectPagePopup';

// Terrasos
import tebuBanner from './documents/terrasos/tebuBanner';

const terrasosSchemas = [tebuBanner];

export const objectSchemas = [
  heroSection,
  stepCardSection,
  basicStepCardSection,
  fullStepCardSection,
  createMethodologyStepCardSection,
  creditTypeSection,
  reviewSection,
  connectSection,
  imageItemsSection,
  dualImageSection,
  practicesOutcomesSection,
  timelineSection,
  imageGridSection,
  detailsSection,
  detailsCard,
  quoteSection,
  quoteText,
  stepCard,
  bottomBanner,
  card,
  pageMetadata,
  customPortableText,
  bannerCard,
  button,
  customImage,
  link,
  ecologicalImpactRelation,
  documentation,
  buyer,
  landSteward,
  connectSectionLink,
  imageBoldTextLabel,
  imageGridItem,
  timelineItem,
  titleBody,
  bodyGreenTextWithPopover,
  marketplaceSection,
  callToAction,
  climateSection,
  carbonPlusSection,
  homeValuesSection,
  valuesImageItem,
  devApproachSection,
  devLedgerSection,
  devOpenAgSection,
  devCareersSection,
  devTestnetSection,
  homeFoldSection,
  titleCustomBody,
  mainnetLaunchInfoSection,
  mainnetActionItem,
  mainnetWhatsNextSection,
  mainnetInfoItem,
  blogSection,
  blogPost,
  caseStudyAboutSection,
  caseStudyApproachSection,
  caseStudyBottomSection,
  caseStudyConclusionSection,
  caseStudyContextSection,
  caseStudyFigureSection,
  caseStudyFundingSection,
  caseStudyFigure,
  caseStudiesListSection,
  caseStudiesAboutSection,
  caseStudiesContextSection,
  caseStudiesApproachSection,
  caseStudiesFundingSection,
  imageWithTitle,
  communityConnectSection,
  communityGoToSection,
  communityCollectiveSection,
  communityCollaborateSection,
  resourcesCard,
  contactPage,
  requestType,
  titleImageCustomBody,
  titleImage,
  faqPage,
  faqCategory,
  fundPage,
  fundCallToAction,
  partnerLogo,
  presskitFeaturedSection,
  presskitAwardsSection,
  titleImageLink,
  presskitTimelineItem,
  presskitTimelineSection,
  presskitTeamSection,
  projectPrefinancing,
  nameTitleImage,
  presskitLogosSection,
  presskitPhotosSection,
  regenTeamMember,
  resourcesSection,
  scienceOpenScienceSection,
  imageCustomBody,
  sciencePartnershipSection,
  scienceCommunitySection,
  scienceCommunityMember,
  titleImageBody,
  scienceTitleDescriptionSection,
  teamSection,
  tokenInfoSection,
  tokenPoolSection,
  teamStakingSection,
  tokenNewsletterSection,
  titleBodyButton,
  imageLink,
  validatorsPage,
  validator,
  validatorWhoSection,
  walletAddressRegistrationWalletSection,
  walletAddressRegistrationFormSection,
  seo,
  nctOverviewSection,
  labeledTextLinkable,
  nctTokenSection,
  nctLedgerSection,
  homePageTopSection,
  creditInfos,
  buyersEcologicalCreditCardsSection,
  buyersFeaturedProjectCardsSection,
  buyersPartnersSection,
  actionCard,
  infoCard,
  homeWebPartnersSection,
  homeWebEcologicalCreditCardsSection,
  homeWebStatsSection,
  homePageProjectsSection,
  projectPrefinanceTimelineItem,
  classPrefinanceTimelineItem,
  prefinanceTimelineItem,
  prefinanceProjects,
  createProjectPagePopup,
];

export default [
  ...documentsSchemas.map(schema => ({
    ...schema,
    fields: [
      ...schema.fields,
      defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
    ],
  })),
  ...objectSchemas,
  ...terrasosSchemas,
];
