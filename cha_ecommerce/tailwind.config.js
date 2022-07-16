/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#333333',
          200: "#262626",
          300: "#1a1a1a",
          400: "#000000",
        },
        secondary: {
          100: "#af9779",
          200: "#c9995e",
          300: "#e49c44",
          400: "#FF9F29",
        },
        neutral: {
          100: "#a39d8f",
          200: "#c9bc9c",
          300: "#e6d6b3",
          400: "#faf4e5",
        },
      },
      fontFamily: {
        'sans': ['sans-serif'],
        'Oldenburg': ['Oldenburg', 'serif'],
        'Rubik': ['Rubik', 'serif'],
      }
    },
    plugins: [],
  }
}