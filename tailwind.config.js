/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1350px',
        tablet: '720px',
        mobile: '320px',
      },
      boxShadow: {
        custon: '1px 3px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        //primary
        green: '#22C55E',

        //text
        'grayish-green': '#294333',
        'green-300': '#4ADE80',
        'green-500': '#22C55E',
        'green-700': '#658A73',
        'custom-red': '#FF3636',

        //background
        'green-light': '#F1FFF8',
        'pink-light': '#FFBDBD',
        'gradient-one': '#23FF95',
        'gradient-two': '#10B77E',
      },
      minWidth: {
        xs: '380px',
      },
    },
  },
  plugins: [],
};
