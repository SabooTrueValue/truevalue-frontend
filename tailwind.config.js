/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'protest-riot':['Protest Riot', 'sans-serif'],
        'anton':['Anton', 'sans-serif']
      },
      textColor: {
        'truevalue': '#2B3395',
      },
      backgroundColor: {
        'truevalue': '#2B3395',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // other plugins...
  ],
};

