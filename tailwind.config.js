/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customOrange':  '#F19828',
        'customBlue': '#484C7F',
        'customPink': '#E05170'
      },
      backgroundImage: {
        'bannerBg': "url('/src/assets/page-turner.svg')"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}

