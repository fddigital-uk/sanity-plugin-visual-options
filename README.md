# Sanity Visual Option List

> This is a **Sanity Studio v3** plugin.
> For the v2 version, please refer to the [v2-branch](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/studio-v2/).

[![NPM Version][npm-image]][npm-url]
[![NPM Version][npm-dl-image]][npm-url]

_For notable updates and bug fixes see [change log](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/trunk/CHANGELOG.md)_

A visual way to show options to users, for example, what layout to apply for a text/image component (default layout):

![preview of default](https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview.png)

Or with tooltip, and as smaller icons:

<img alt="preview of small with tooltip" src="https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview-small.png" style="width: 530px; max-width: 100%;">

Or, also for color options:

<img alt="preview of large with tooltip" src="https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview-color-list.png" style="width: 530px; max-width: 100%;">

See code at [over here](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/trunk/examples/color-list.jsx) for how to implement a color list.


## Installation

From the terminal within the Sanity Studio directory:

```
npm install sanity-plugin-visual-options@next
```

Then add the plugin to your sanity.config.js/ts file:

```javascript
import { visualOptions } from "sanity-plugin-visual-options";

export default defineConfig({
  // ...
  plugins: [
    visualOptions(),
  ]
})
```

## Usage

Schema to produce the above screenshot can be found [here](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/trunk/examples/hero-schema.js) with the icons found [here](https://github.com/fractaldimensions/sanity-plugin-visual-options/blob/trunk/examples/icons.jsx)

In your schema, you should add a field of type 'visualOptions', and the options property should contain a key of 'list'. Within this is another dictionary, with the key being the reference that will be saved against the item. Each item must contain an icon as a minimum, which is a React Component. 

In the example below, which produced the image above with small options, the icons are simple React components returning an SVG, therefore react-icons should work here too.

_*NOTE: As of Sanity Studio V3 when using React within a schema the schema file must have the extension jsx or tsx not js/ts*_

```javascript
{
  ...,
  fields: [
    {
      name: "blockLayout",
      title: "Block Layout",
      type: "visualOptions",
      options: {
        showTooltip: true,
        optionSize: "small",
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
  ],
}
```

## Options

Within the `options` for the schema, there are the following options:

- `showLabels: (true|false)` - Sets whether to show the labels for each item based on their name.
- `showTooltip: (true|false)` - The name of the item will be turned into a tooltip and displayed on hover. Overrides `showLabels` above.
- `optionSize: ("small"|"medium"|"large")` - Sets the size of the option items. Defaults to "medium" if omitted or and invalid option is provided.
- `shape: ("circle"|"box")` - Optional, if omitted, default will be "box".

## Layout Options

## Small 

<img alt="preview of small with tooltip" src="https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview-small.png" style="width: 530px; max-width: 100%;">

## Medium

<img alt="preview of medium (default) with tooltip" src="https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview-medium.png" style="width: 530px; max-width: 100%;">

## Large

<img alt="preview of large with tooltip" src="https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/trunk/images/preview-large.png" style="width: 530px; max-width: 100%;">

## Future Development/Considerations

- Allow items multi selections with limits e.g. maximum of two.
- Add a check mark to show selection and allow de-selection (moving of radio to checkboxes also solving the above item).
- Allow standard images to be displayed rather than just SVGs.

[npm-image]: https://badgen.net/npm/v/sanity-plugin-visual-options?2.0.0-beta.1
[npm-url]: https://npmjs.org/package/sanity-plugin-visual-options
[npm-dl-image]: https://badgen.net/npm/dt/sanity-plugin-visual-options
