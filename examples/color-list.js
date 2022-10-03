import React from "react";

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

const Color = (color) => {
  return () => <div
    style={{
      background: color,
    }}
  />
}

const colors = Object.assign(
  {},
  ...colorList.map((c) => ({
    [c.key]: {
      name: c.title,
      icon: Color(c.value),
    },
  }))
);

export default {
  name: "colorList",
  title: "Colour",
  type: "visualOptions",
  options: {
    showTooltip: false,
    optionSize: "small",
    shape: "circle",
    list: colors,
  }
}