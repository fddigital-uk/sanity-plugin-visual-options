# Sanity Visual Option List

A visual way to show options to users:

![preview image](https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/master/images/preview.png)

## Installation

## Usage



In your schema, you should add a field of type 'visualOptions', and the options property should contain a key of

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
            selected: true,
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

## Future Development

- Currently only allows single selection, implement multiple select.

