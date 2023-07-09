/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'project': "url('https://i.ibb.co/gyj7Ttr/project.jpg')",
      }
    }
  },
  plugins: [require("daisyui")],
}