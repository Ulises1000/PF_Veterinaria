/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        patas: "url('./src/style-assets/bg-patas.png')",
      },
    },
  },
  plugins: [],
};
