/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'blue' : '#80d8ff',
      'pink' : '#ea80fc',
      'grey' : '#3b474a',
      'white' : '#FFFAFA',
      'red' : '#FF0000',
      'black' : '#000000',
    },
    extend: {},
  },
  plugins: [],
}

