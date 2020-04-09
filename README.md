# Sanity Visual Option List

[![NPM Version][npm-image]][npm-url]
[![NPM Version][npm-dl-image]][npm-url]

_For notable updates and bug fixes see [change log](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/master/CHANGELOG.md)_

A visual way to show options to users, for example, what layout to apply for a text/image component:

![preview image](https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/master/images/preview.png)

## Installation

From the terminal within the Sanity Studio directory:

```
sanity install visual-options
```

## Usage

Schema to produce the above screenshot can be found [here](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/master/examples/hero-schema.js) with the icons found [here](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/master/examples/icons.js)

In your schema, you should add a field of type 'visualOptions', and the options property should contain a key of 'list'. Within this is another dictionary, with the key being the reference that will be saved against the item. Each item must contain an icon as a minimum, which is a React Component. 

In the example below, which produced the image above, the icons are simple React components returning an SVG, therefore react-icons should work here too.

```javascript
{
    ...,
    fields: [
    {
      name: "blockLayout",
      title: "Block Layout",
      type: "visualOptions",
      options: {
        list: {
          left: {
            name: "Text Left / Image Right",
            icon: OITextLeftOverlap,
            default: true,
          },
          right: {
            name: "Text Right / Image Left",
            icon: OITextRightOverlap,
          },
          top: {
            name: "Text Top / Image Bottom",
            icon: OITextTopOverlap,
          },
          bottom: {
            name: "Text Botom / Image Top",
            icon: OITextBottomOverlap,
          },
          notext: {
            name: "Image, No Text",
            icon: OIImage,
          },
          noimage: {
            name: "Text, No Image",
            icon: OIText,
          },
        },
      },
    },
    ...
}
```

## Future Development/Considerations

- Allow items multi selections with limits e.g. maximum of two.
- Add a check mark to show selection and allow de-selection (moving of radio to checkboxes also solving the above item).
- Implement small and medium sized box options.
- Allow standard images to be displayed rather than just SVGs.

[npm-image]: https://badgen.net/npm/v/sanity-plugin-visual-options?0.7.5
[npm-url]: https://npmjs.org/package/sanity-plugin-visual-options
[npm-dl-image]: https://badgen.net/npm/dt/sanity-plugin-visual-options