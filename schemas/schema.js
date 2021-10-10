// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import createCreditClassPage from './documents/registry/createCreditClassPage'
import createMethodologyPage from './documents/registry/createMethodologyPage'
import creditClass from './documents/registry/creditClass'
import homePage from './documents/registry/homePage'
import homePageWeb from './documents/www/homePageWeb'
import methodology from './documents/registry/methodology'
import methodologyReviewProcessPage from './documents/registry/methodologyReviewProcessPage'

import document from './documents/shared/document'
import ecologicalImpact from './documents/shared/ecologicalImpact'
import ecologicalOutcome from './documents/shared/ecologicalOutcome'
import faq from './documents/shared/faq'
import media from './documents/shared/media'
import resource from './documents/shared/resource'
import sdg from './documents/shared/sdg'

// Object types
import basicStepCardSection from './objects/sections/basicStepCardSection'
import connectSection from './objects/sections/connectSection'
import createMethodologyStepCardSection from './objects/sections/createMethodologyStepCardSection'
import creditTypeSection from './objects/sections/creditTypeSection'
import fullStepCardSection from './objects/sections/fullStepCardSection'
import heroSection from './objects/sections/heroSection'
import homeFoldSection from './objects/sections/homeFoldSection'
import reviewSection from './objects/sections/reviewSection'
import stepCardSection from './objects/sections/stepCardSection'

import bottomBanner from './objects/bottomBanner'
import button from './objects/button'
import buyer from './objects/buyer'
import card from './objects/card'
import connectSectionLink from './objects/connectSectionLink'
import customImage from './objects/customImage'
import customPortableText from './objects/customPortableText'
import documentation from './objects/documentation'
import ecologicalImpactRelation from './objects/ecologicalImpactRelation'
import landSteward from './objects/landSteward'
import link from './objects/link'
import pageMetadata from './objects/pageMetadata'
import stepCard from './objects/stepCard'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    basicStepCardSection,
    bottomBanner,
    button,
    buyer,
    card,
    connectSection,
    connectSectionLink,
    createCreditClassPage,
    createMethodologyPage,
    createMethodologyStepCardSection,
    creditClass,
    creditTypeSection,
    customImage,
    customPortableText,
    document,
    documentation,
    ecologicalImpact,
    ecologicalImpactRelation,
    ecologicalOutcome,
    faq,
    fullStepCardSection,
    heroSection,
    homeFoldSection,
    homePage,
    homePageWeb,
    landSteward,
    link,
    media,
    methodology,
    methodologyReviewProcessPage,
    pageMetadata,
    resource,
    reviewSection,
    sdg,
    stepCard,
    stepCardSection,
  ]),
})
