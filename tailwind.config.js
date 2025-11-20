/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF", // macOS Blue
        "primary-dark": "#0056B3",
        secondary: "#8E8E93", // macOS Gray
        "background-light": "#F5F5F7", // macOS Light Background
        "background-dark": "#000000", // macOS Dark Background
        "card-border-hover": "#007AFF",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.png')",
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Charter", "Palatino", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
