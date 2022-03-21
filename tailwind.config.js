module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //  darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange': {
        500: '#FF5C00'
      },
      'black' : {
        100 : '#242120'
      },
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin')
],

 }