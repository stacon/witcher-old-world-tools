/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      // ... keep other font families as is ...
    },
    extend: {
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
