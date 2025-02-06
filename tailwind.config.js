/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#01e7ff',
          light: '#80f3ff',
          dark: '#00b3c7',
        },
        secondary: {
          DEFAULT: '#0e1f34',
          light: '#162942',
          dark: '#091625',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};