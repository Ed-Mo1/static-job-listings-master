/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    colors: {
      "desaturated-dark-cyan": "#008b8b",
      main: "#5ba4a4",
      "light-grayish-cyan-background": "#f2f2f2",
      "light-grayish-cyan-filter": "#ececec",
      "dark-grayish-cyan": "#808080",
      "very-dark-grayish-cyan": "#2f4f4f",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
