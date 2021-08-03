// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import homePage from './documents/registry/homePage'
import createCreditClassPage from './documents/registry/createCreditClassPage'
import createMethodologyPage from './documents/registry/createMethodologyPage'
import methodologyReviewProcessPage from './documents/registry/methodologyReviewProcessPage'
import methodology from './documents/registry/methodology'
import creditClass from './documents/registry/creditClass'

import resource from './documents/shared/resource'
import faq from './documents/shared/faq'
import document from './documents/shared/document'
import ecologicalImpact from './documents/shared/ecologicalImpact'
import media from './documents/shared/media'
import sdg from './documents/shared/sdg'
import ecologicalOutcome from './documents/shared/ecologicalOutcome'

// Object types
import heroSection from './objects/sections/heroSection'
import stepCardSection from './objects/sections/stepCardSection'
import basicStepCardSection from './objects/sections/basicStepCardSection'
import fullStepCardSection from './objects/sections/fullStepCardSection'
import createMethodologyStepCardSection from './objects/sections/createMethodologyStepCardSection'
import creditTypeSection from './objects/sections/creditTypeSection'
import reviewSection from './objects/sections/reviewSection'
import connectSection from './objects/sections/connectSection'

import stepCard from './objects/stepCard'
import bottomBanner from './objects/bottomBanner'
import card from './objects/card'
import pageMetadata from './objects/pageMetadata'
import customPortableText from './objects/customPortableText'
import button from './objects/button'
import customImage from './objects/customImage'
import link from './objects/link'
import ecologicalImpactRelation from './objects/ecologicalImpactRelation'
import documentation from './objects/documentation'
import buyer from './objects/buyer'
import landSteward from './objects/landSteward'
import connectSectionLink from './objects/connectSectionLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    heroSection,
    stepCardSection,
    basicStepCardSection,
    fullStepCardSection,
    createMethodologyStepCardSection,
    creditTypeSection,
    reviewSection,
    stepCard,
    bottomBanner,
    card,
    pageMetadata,
    customPortableText,
    button,
    customImage,
    link,
    ecologicalImpactRelation,
    documentation,
    buyer,
    landSteward,
    connectSection,
    connectSectionLink,
    resource,
    faq,
    document,
    ecologicalImpact,
    media,
    sdg,
    ecologicalOutcome,
    homePage,
    createCreditClassPage,
    createMethodologyPage,
    methodologyReviewProcessPage,
    methodology,
    creditClass,
  ]),
})
