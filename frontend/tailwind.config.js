/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg1": "url(/src/assets/images/pexels-laura-stanley-2147029.jpg)",
        "bg2": "url(/src/assets/images/pexels-shelagh-murphy-1666816.jpg)",
        "bg3": "url(/src/assets/images/candle-2738532_1280.jpg)",
        "bg4": "url(/src/assets/images/candles-5690190_1280.jpg)",
        "bg5": "url(/src/assets/images/pexels-sky.jpg)",
        "bg6": "url(/src/assets/images/pexels-ovan-62693.jpg)",
        // "bg6": "url(/src/assets/images/pexels-pixabay-276701.jpg)",
        // "bg7": "url(/src/assets/images/pexels-gdtography-911738.jpg)"
      }
    },
  },
  plugins: [],
}

