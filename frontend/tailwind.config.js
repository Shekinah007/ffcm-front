/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg1": "url(/src/assets/images/pexels-laura-stanley-2147029.jpg)"
      }
    },
  },
  plugins: [],
}

