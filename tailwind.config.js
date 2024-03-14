/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        "color-canvas": "#E8E8E3",
        "color-primary": "#232321",
        "color-secondary": "#767780",
      },
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        "large-font-0": "11rem",
      },
    },
  },
  plugins: [],
};
