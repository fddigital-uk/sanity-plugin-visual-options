import React from "react";

// Color list that can be stored centrally or generated from another document
const colorList = [
  {
    key: "one",
    title: "Blue",
    value: "#137380",
  },
  {
    key: "two",
    title: "Purple",
    value: "#7C1375",
  },
  {
    key: "three",
    title: "Mint",
    value: "#00FFA3",
  },
  {
    key: "gradient-one-two",
    title: "Gradient",
    value: "linear-gradient(110.72deg, #137380 0%, #7C1375 100.52%)"
  }
];

// Component to appear inside the option list
const Color = (color) => {
  return () => <div
    style={{
      background: color,
    }}
  />
}

// Create option list using a combination of Color component and the color list.
const colors = Object.assign(
  {},
  ...colorList.map((c) => ({
    [c.key]: {
      name: c.title,
      icon: Color(c.value),
    },
  }))
);

// Standard schema settings
export default {
  name: "colorList",
  title: "Colour",
  type: "visualOptions",
  options: {
    showTooltip: false,
    optionSize: "small",
    shape: "circle",
    list: colors, // Set color options as list
  }
}