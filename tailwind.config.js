/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["syne", "sans-serif"],
        sans: ['sans', "sans-serif"],
        poppins:['poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
