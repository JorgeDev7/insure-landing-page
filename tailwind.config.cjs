/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-serif-display": "'DM Serif Display', 'serif'",
        "karla": "'Karla', 'sans-serif'",
      }
    },
  },
  plugins: [],
}
