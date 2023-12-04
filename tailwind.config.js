/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        '1440px': '1440px',
      },
      backgroundColor: {
        '#FFFFFF': '#FFFFFF',
      },
      padding: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}