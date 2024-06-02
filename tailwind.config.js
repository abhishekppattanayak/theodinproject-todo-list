/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'peer-checked:bg-red-400',
    'peer-checked:bg-amber-400',
    'peer-checked:bg-green-400',
    'hover:bg-red-400',
    'hover:bg-amber-400',
    'hover:bg-green-400',
    'bg-red-400',
    'bg-amber-400',
    'bg-green-400',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}