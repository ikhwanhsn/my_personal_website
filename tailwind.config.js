/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-one': '#4A55A2',
        'color-two': '#7895CB',
        'color-tree': '#A0BFE0',
        'color-four': '#C5DFF8',
      },
    },
  },
  plugins: [require("daisyui")],
}