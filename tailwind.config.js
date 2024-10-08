/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Aeonik_light':['Aeonik_light','sans-serif'],
      'aeonik_bold':['Aeonik_bold','sans-serif'],
      'Aeonik_regular':['Aeonik_regular','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}