/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        quizlang:['MyCustomFont', 'sans-serif'],
      } , 
      backgroundImage:{
        'custom-gradient' : 'linear-gradient(135deg , #d3d3d3 , #f5f5f5)',
        'custom-gradient-phone' : 'linear-gradient(45deg , #d3d3d3 , #f5f5f5)',
        'custom-gradient-selectlangue' : 'linear-gradient(45deg , #22c55e , #facc15 )',
      }
    },
  },
  plugins: [],
}
