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
        base: "#1B1725",
        accent: "#ED1B24",
      },
      fontFamily: {
        logo: "GROUPE",
        paragraf: "DM Sans",
        cissele: "Cissele",
        ponjoung: "Ponjoung",
        title: "Baron Neue",
        mono: "Courier New",
      },
    },
  },
  plugins: [],
};
