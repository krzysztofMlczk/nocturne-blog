/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chaos-black": {
          DEFAULT: "#101010",
        },
        "cod-gray": {
          DEFAULT: "#191919",
        },
        "dusty-gray": {
          DEFAULT: "#979797",
          900: "#2D2D2D",
        },
        supernova: {
          DEFAULT: "#FFC700",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
