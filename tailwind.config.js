/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //primary
        green: '#22C55E',

        //text
        'grayish-green': '#294333',
        'green-300': '#4ADE80',
        'green-500': '#22C55E',
        red: '#FF3636',

        //background
        'green-light': '#F1FFF8',
        'pink-light': '#FFBDBD',
        'gradient-one': '#23FF95',
        'gradient-two': '#10B77E',
      },
    },
  },
  plugins: [],
};
