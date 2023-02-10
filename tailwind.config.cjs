/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F9BFF',
        secondary: '#5856D6',
        gray: '#27274D',
        black: '#0C0F18',
        white: '#F4F7FF',
        danger: '#FF3B30',
        warning: '#FF9500',
        success: '#34C759',
      },
      fontFamily: {
        rubik: 'Rubik'
      }
    },
  },
  plugins: [],
}
