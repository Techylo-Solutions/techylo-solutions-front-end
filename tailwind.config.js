/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluetheme:'rgba(0,157,176,1)',
        greentheme:'rgba(79,217,69,1)'
      }
    },
  },
  plugins: [],
}

