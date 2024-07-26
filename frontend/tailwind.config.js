const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#5366BB',
        'primary-brand-dark':'#5761C8',
        'primary-brand-light':'#948ABC',
        'secondary-brand':'#4F8561',
        'secondary-brand-dark':'#E08733',
        'secondary-brand-light':'#E8CE4D',
        'danger-state':'#E71D36',
        'warning-state':'#FFB800',
        'sucess-state':'#3C8505',
        'dark-color':'#1A1A1A',
        'gray-color':'#757575',
        'light-color':'#EFF3FD',
        'blue-light-color':"#3563E9",
        'violet-color':'#5761C8',
        'blue-juli-color': '#5956E9',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
