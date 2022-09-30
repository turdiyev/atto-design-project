const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  darkMode: "class",  
  theme: {
    colors: {
      ...colors,
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      neutral: "var(--color-neutral)",
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
  corePlugins: {
    preflight: false // <== disable this!
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
