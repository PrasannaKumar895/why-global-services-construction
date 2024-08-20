/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-in-out',
      },
    },
  },
  plugins: [],
}