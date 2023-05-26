/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbffa7",
        brickorange: "#ff764d",
        lightblue: "#b1c5ff",
        lavender: "#d5b3ff",
        aqua: "#b6ffc0",
        deepblue: "#0000ff",
      },
      fontFamily: {
        "PT-Sans": ["PT Sans"],
      },
    },
  },
  plugins: [],
};
