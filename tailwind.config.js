/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'own-primary' : "#7A71EB",
        'own-secondary' : "#EEEEEE",
        'border' : '#6E6E6ED',
      },
    },
  },
  plugins: [],
}

