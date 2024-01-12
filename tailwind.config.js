/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
