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
      }
    },
  },
  plugins: [],
}
