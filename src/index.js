import { createPlugin } from "sanity"
import React from "react"
import VisualOptions from "./components"

export default createPlugin({
  schema: {
    types: [
      {
        title: "Visual Options",
        type: "string",
        name: "visualOptions",
        components: {
          input: VisualOptions,
        },
      },
    ],
  },
})
