/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#42a6f6'
      }
    },
  },
  plugins: [require("daisyui")],
}

