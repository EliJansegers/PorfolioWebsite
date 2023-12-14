/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0D1B2A',
        blueGray: '#1B263B',
        steelBlue: '#415A77',
        lightBlue: '#778DA9',
        offWhite: '#E0E1DD',
      },
    },
  },
  plugins: [],
}