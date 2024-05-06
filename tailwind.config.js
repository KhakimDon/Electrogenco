/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "sm": { max: "650px" },
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],

}

