import {
  OITextLeftOverlap,
  OITextRightOverlap,
  OIImage,
  OIText,
  OITextBottomOverlap,
  OITextTopOverlap,
} from "./icons"

export default {
  name: "hero",
  title: "Hero",
  type: "object",
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
          },
          right: {
            name: "Text Right / Image Left",
            icon: OITextRightOverlap,
            default: true,
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
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "blockContent",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {},
        },
        {
          type: "actionButton",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "blockContent",
      imageUrl: "image.asset.url",
    },
    prepare(selection) {
      const block = (selection.title || []).find(
        block => block._type === "block"
      )
      return {
        title: block.children
          ? block.children
              .filter(child => child._type == "span")
              .map(span => span.text)
              .join("")
          : "Hero",
        imageUrl: selection.imageUrl,
      }
    },
  },
}
