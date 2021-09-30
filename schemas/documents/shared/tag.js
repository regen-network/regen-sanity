import isColor from "../../../plugins/isColor"

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      validation: Rule => Rule.custom(colorString => {
        return isColor(colorString);
      }).warning().required(),
      description: 'Must be a legal CSS color, as in https://www.w3schools.com/cssref/css_colors_legal.asp',
    },
  ]
}