export default {
  name: 'buyersPage',
  type: 'document',
  title: 'Buyers Page',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'featuredSection',
      type: 'reference',
      to: [{type: 'featuredSection'}],
      title: 'Featured Credit Section',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footerButtonText',
      type: 'string',
      title: 'Footer Button Text',
      validation: Rule => Rule.required(),
      default: '',
    },
    {
      name: 'footerLink',
      type: 'url',
      title: 'Footer Button Link',
      description: 'This opens in a modal',
      validation: Rule => Rule.required(),
      default: '',
    },
    {
      name: 'metadata',
      type: 'pageMetadata',
      title: 'SEO & Metadata',
    },
  ],
};

// config.yml
// - label: "For Land Stewards page"
// name: "land-stewards"
// file: "web-www/content/land-stewards/index.yaml"
// fields:
//   - label: "Top Section"
//     name: "topSection"
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - {label: Body, name: body, widget: text}
//   - label: "Image Items Section"
//     name: "imageItemsSection"
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - label: "Image Items"
//         name: imageItems
//         widget: list
//         collapsed: false
//         fields:
//           - {label: "Header", name: header, widget: string}
//           - {label: "Image", name: image, widget: image}
//           - {label: "Description", name: description, widget: text}
//   - label: "Join Farmers Section"
//     name: "joinFarmersSection"
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - label: "Farmers"
//         name: farmers
//         widget: object
//         fields:
//           - {label: "Amount", name: amount, widget: string}
//           - {label: "Label", name: label, widget: string}
//           - {label: "Image", name: image, widget: image}
//       - label: "Land"
//         name: land
//         widget: object
//         fields:
//           - {label: "Amount", name: amount, widget: string}
//           - {label: "Label", name: label, widget: string}
//           - {label: "Image", name: image, widget: image}
//   - label: "Practices and Outcomes Section"
//     name: "practicesOutcomesSection"
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - {label: Note, name: note, widget: string}
//       - label: "Practices"
//         name: practices
//         widget: object
//         fields:
//           - {label: Header, name: header, widget: string}
//           - label: "Items"
//             name: items
//             widget: list
//             collapsed: false
//             fields:
//               - {label: "Header", name: header, widget: string}
//               - {label: "Image", name: image, widget: image}
//               - {label: "Description", name: description, widget: text}
//       - label: "Outcomes"
//         name: outcomes
//         widget: object
//         fields:
//           - {label: Header, name: header, widget: string}
//           - label: "Items"
//             name: items
//             widget: list
//             collapsed: false
//             fields:
//               - {label: "Header", name: header, widget: string}
//               - {label: "Image", name: image, widget: image}
//               - {label: "Description", name: description, widget: text}
//   - label: "How it works Section"
//     name: timelineSection
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - label: "Items"
//         name: items
//         widget: list
//         collapsed: false
//         fields:
//           - {label: "Header", name: title, widget: string}
//           - {label: "Url", name: url, widget: string, required: false}
//           - {label: "Image", name: image, widget: image}
//           - label: Tags
//             name: tags
//             widget: list
//             collapsed: false
//             fields:
//               - {label: "Name", name: name, widget: string}
//               - {label: "Background color", name: color, widget: string}
//   - label: "More Questions Section"
//     name: "moreQuestionsSection"
//     widget: "object"
//     fields:
//       - {label: Header, name: header, widget: string}
//       - {label: Description, name: description, widget: markdown}
//       - {label: First Button Text, name: firstButtonText, widget: string}
//       - {label: First Button Url, name: firstButtonUrl, widget: string}
//       - {label: Second Button Text, name: secondButtonText, widget: string}
//   - label: "Popup"
//     name: "popup"
//     widget: "object"
//     fields:
//       - {label: button text, name: buttonText, widget: string}
//       - {label: airtable link, name: airtableLink, widget: string}



// CONTENT

// topSection:
//   header: Get paid for your ecological impact. Regenerate the planet.
//   body: Farmers and ranchers positively impact our planet in numerous ways. Regen
//     Network rewards ecological stewardship.
// imageItemsSection:
//   header: Designed for farmers
//   imageItems:
//     - header: Create a new revenue stream
//       image: ../../static/media/revenue.svg
//       description: Get paid for existing or new ecological stewardship practices on
//         farm and ranch lands.
//     - header: Streamlined process
//       image: ../../static/media/verified-outcomes.svg
//       description: Registration, monitoring, reporting, verification and payment are
//         streamlined to save you precious time.
//     - header: Keep more money in your pocket
//       image: ../../static/media/buying-through-regen.svg
//       description: More money stays in your pocket through automation and cutting edge
//         technology.
// joinFarmersSection:
//   header: Join the farmers who’ve signed up
//   farmers:
//     amount: 216
//     label: farmers and ranchers
//     image: ../../static/media/farmers.png
//   land:
//     amount: 16.4M
//     label: acres of land
//     image: ../../static/media/acres-of-land.png
// practicesOutcomesSection:
//   header: Get paid for these practices, outcomes, and more:*
//   note: "*These credits are not yet ready. Sign up now to get notified when
//     available!"
//   practices:
//     header: land management practices
//     items:
//       - image: ../../static/media/no-till.svg
//         header: No-Till
//         description: The practice of limiting soil disturbance by refraining from
//           tilling reduces soil erosion and increases soil health.
//       - image: ../../static/media/cover-cropping.svg
//         header: Cover cropping
//         description: Cover crops maintain soil coverage during non-crop periods rather
//           than for the purpose of being harvested reducing erosion and
//           increasing soil health.
//       - image: ../../static/media/crop-rotation.svg
//         header: Crop rotation
//         description: Growing a series of different types of crops in a rotational
//           sequence over the same area increases soil fertility, reduces erosion,
//           and more.
//       - image: ../../static/media/rotational-grazing.svg
//         header: Rotational grazing
//         description: A management plan moving grazing livestock between pastures on a
//           regular basis increases soil health and improves forage quality.
//       - image: ../../static/media/agroforestry.svg
//         header: Agroforestry
//         description: A land-use management system in which trees or shrubs are grown
//           around or among crops or pastureland.
//       - image: ../../static/media/riparian-zones.svg
//         header: Riparian protection
//         description: Protecting the area between land and a river or stream stabilizes
//           soil, encourages biodiversity, and protects water quality.
//       - image: ../../static/media/perennials.svg
//         header: Perennials
//         description: Perennial plants can hold soil to prevent erosion, capture
//           dissolved nitrogen, and reduce the need for herbicides.
//       - image: ../../static/media/buffer-strips.svg
//         header: Buffers strips
//         description: An area of land maintained in permanent vegetation designed to
//           intercept pollutants that help to improve air, soil, and water
//           quality.
//   outcomes:
//     header: ecological outcomes
//     items:
//       - image: ../../static/media/carbon-sequestration.jpg
//         header: Carbon sequestration
//         description: Sequestering carbon in SOC is one way to mitigate climate change.
//       - image: ../../static/media/above-ground-biomass.png
//         header: Above ground biomass
//         description: Increasing all living biomass which is located above the ground.
//       - image: ../../static/media/soil-health.png
//         header: Soil health
//         description: Healthy soil acts as a vital living ecosystem that sustains plants,
//           animals, and humans.
//       - image: ../../static/media/animal-welfare.png
//         header: Animal welfare
//         description: Animals play an important role in the maintenance of balance in an
//           ecosystem.
//       - image: ../../static/media/ecosystem-health.png
//         header: Ecosystem health
//         description: Robust ecosystems provide a home for humans, plants, and animals to
//           flourish.
//       - image: ../../static/media/enhance-biodiversity.png
//         header: Enhance biodiversity
//         description: The diversity of plants and animals is of vital importance to our
//           well-being.
// timelineSection:
//   header: How it works
//   items:
//     - title: Register project
//       image: ../../static/media/Registration.svg
//       url: https://airtable.com/embed/shrnnbymyofPB75WQ
//       tags:
//         - name: farmer
//           color: "#7BC796"
//     - title: Establish baseline
//       image: ../../static/media/Accountability-timeline.svg
//       tags:
//         - name: monitor
//           color: "#6D9BDB"
//         - name: farmer
//           color: "#7BC796"
//     - title: Implement land management
//       image: ../../static/media/Farmer.svg
//       tags:
//         - name: farmer
//           color: "#7BC796"
//     - title: Monitor change
//       image: ../../static/media/Trust-timeline.svg
//       tags:
//         - name: monitor
//           color: "#6D9BDB"
//         - name: farmer
//           color: "#7BC796"
//     - title: Issue credits
//       image: ../../static/media/Credits-Icon.svg
//       tags:
//         - name: regen registry
//           color: "#E6735C"
//     - title: Sell credits
//       image: ../../static/media/Credits-Available.svg
//       tags:
//         - name: regen registry
//           color: "#E6735C"
//     - title: Get paid
//       image: ../../static/media/Money.svg
//       tags:
//         - name: farmer
//           color: "#7BC796"
// moreQuestionsSection:
//   header: Are you interested in getting paid for your ecological practices?
//   description: md// Get started by checking out our current credit <a
//     href="/registry/credit-classes/carbonplus-grasslands">CarbonPlus
//     Grasslands</a>, reviewing our <a href="/faq/carbonplus%20credits">FAQ</a> or
//     jump in with “Start the Process”.
//   firstButtonText: View Current Credit
//   firstButtonUrl: /registry/credit-classes/carbonplus-grasslands
//   secondButtonText: Start the Process
// popup:
//   buttonText: Start the process
//   airtableLink: https://airtable.com/embed/shrnnbymyofPB75WQ