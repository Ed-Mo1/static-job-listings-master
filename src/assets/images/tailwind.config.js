/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        "desaturated-dark-cyan": "#008b8b",
        "light-grayish-cyan-background": "#f2f2f2",
        "light-grayish-cyan-filter": "#ececec",
        "dark-grayish-cyan": "#808080",
        "very-dark-grayish-cyan": "#2f4f4f",
      },
    },
  },
  plugins: [],
};
