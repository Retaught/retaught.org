/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'gradient-x':'gradient-x 8s ease infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      },
      colors: {
        primary: '#531CB3',
        secondary: '#FC440F',
        grey: '#3D3549',
        lightGrey: '#EFECF4',
        dark: '#141217',
        light: '#F4F7FF',
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
