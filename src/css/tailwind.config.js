// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    'public/index.html',
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  theme: {
    extend: {

        colors: {
          gray: {
            100: '#FBFBFB',
            200: '#EAEAEA',
            300: '#DFDFDF',
            400: '#999999',
            500: '#7F7F7F',
            600: '#666666',
            700: '#4C4C4C',
            800: '#333333',
            900: '#191919',
          },
          blue: {
            100: '#E6F0FD',
            200: '#CCE2FC',
            300: '#99C5FA',
            400: '#66A9F7',
            500: '#338CF5',
            600: '#0070F4',
            700: '#0064DA',
            800: '#0059C2',
            900: '#004391',
           1000: '#0e2b63',
           1100: '#004f9f',
          },
          teal: {
            100: '#E6FFFA',
            200: '#B2F5EA',
            300: '#81E6D9',
            400: '#4FD1C5',
            500: '#3ABAB4',
            600: '#319795',
            700: '#2C7A7B',
            800: '#285E61',
            900: '#234E52',
          },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
