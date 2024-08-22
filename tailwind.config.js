/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Aeonik_light':['Aeonik_light','sans-serif'],
      'Aeonik_bold':['Aeonik_bold','sans-serif'],
      'Aeonik_register':['Aeonik_register','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}