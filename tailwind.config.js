/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        "color-canvas": "#E8E8E3",
        "color-primary": "#232321",
      },
      fontFamily: {
        'generalsans': ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

