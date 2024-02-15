module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      fontFamily: {
        librecaslon: ["Libre Caslon Text", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        mont: ["Montserrat Variable", "sans-serif"],
        letter: ["League Mono", "sans-serif"]
      }
    },
  },
  plugins: [],
};
