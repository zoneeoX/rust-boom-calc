/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bebas: "Bebas Neue",
        Montserrat: "Montserrat",
        Roboto: "Roboto",
        Raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
