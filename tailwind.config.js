const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  darkMode: "class",  
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      neutral: "var(--color-neutral)",
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      red: colors.red,
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
