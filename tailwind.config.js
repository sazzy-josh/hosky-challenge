/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    rubik: ["Rubik", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        primaryColor: "#003F8F",
        darkText: "#0E0F0E",
        whiteText: "#EBECED",
        bgColor: "#F9F9F9",
        grey: "#60606F",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
