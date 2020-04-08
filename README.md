# Sanity Visual Option List

A visual way to show options to users, for example, what layout to a text/image component:

![preview image](https://github.com/fractaldimensions/sanity-plugin-visual-options/raw/master/images/preview.png)

## Installation

## Usage

In your schema, you should add a field of type 'visualOptions', and the options property should contain a key of 'list'. Within this is another dictionary, with the key being the reference that will be saved against the item. Each item must contain an icon as a minimum.

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

- Allow items multi selections with limits e.g. maximum of two
- Add a check mark to show selection and allow de-selection (moving of radio to checkboxes also solving the above item).