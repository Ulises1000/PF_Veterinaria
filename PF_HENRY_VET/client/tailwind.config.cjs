/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '28.125': '28.125rem',
        "400px": "25rem",
        "450px": "28.125rem",
        "200px": "12.5rem",
        "250px": "15.625rem",
        "415px":"25.938rem"
      },
      colors: {
        'Dark-Violet': 'rgba(165, 94, 234, 0.35)',
        "Dark-Violet2": "rgb(193, 168, 228)",
      },
      backgroundImage: {
        patas: "url('./src/style-assets/bg-patas.png')",
      },
      fontFamily: {
        'Fredoka': ['"Fredoka"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
