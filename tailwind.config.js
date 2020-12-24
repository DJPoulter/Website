module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        COrange: "#E27D60",
        CBlue: "#85DCB",
        CYellow: "#E8A87C",
        CPurple: "#C38D9E",
        CDGreen: "#41B3A3",
        CLGreen: "#7cc2aa",

        Pastel: {
          Orange: "#f38f7d",
        },
      },
    },
    fontFamily: {
      // eslint-disable-next-line prettier/prettier
      'sans': ["Volkorn", "Sans-serif"],
    },
  },
  variants: {
    animation: ["hover"],
  },
  plugins: [],
};
