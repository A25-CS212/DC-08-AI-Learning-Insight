/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    './index.html',
    // './src/index.css',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D4ED8',
        'dark-blue': '#2D3E50',
        'dark-background': '#141414',
        'dark-background-card': '#0D0D0D',
        'white-smoke': '#F9F9FB',
      },
    },
  },
  plugins: [],
};