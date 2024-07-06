const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "350px" },
      md: { min: "351px", max: "768px" },
      tb: { min: "769px", max: "1024px" },
      lg: { min: "769px", max: "1280px" },
      xl: { min: "1281px", max: "1536px" },
      xxl: { min: "1537px", max: "2100px" },
      xxxl: { min: "2101px", max: "3000px" },
    },
    extend: {},
  },
  plugins: [],
});
