/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2563EB", // Royal Blue
        "primary-dark": "#1E40AF", // Darker Royal Blue
        "secondary": "#64748B", // Slate 500
        "background-light": "#F8FAFC", // Slate 50
        "background-dark": "#0F172A", // Slate 900
        "card-border-hover": "#3B82F6" // Blue 500
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}

