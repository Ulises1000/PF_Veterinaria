/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        28.125: "28.125rem",
        "400px": "25rem",
        "450px": "28.125rem",
        "200px": "12.5rem",
        "250px": "15.625rem",
        "415px": "25.938rem",
      },
      colors: {
        "Dark-Violet": "rgba(165, 94, 234, 0.35)",
        "Dark-Violet2": "rgb(193, 168, 228)",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        patas: "url('./src/style-assets/bg-patas.png')",
      },
      fontFamily: {
        Fredoka: ['"Fredoka"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
