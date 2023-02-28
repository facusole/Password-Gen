/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Work Sans', sans-serif",
      },
      colors: {
        'lilac-50': '#F9F7FC',
        'lilac-500': '#DBCDF4',
        'gray': '#73757A',
        'black': '#0F1019'
      }
    },
  },
  plugins: [],
}
