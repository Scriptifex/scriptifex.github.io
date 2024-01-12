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
  daisyui: {
    themes: [
      "winter",
      "forest",
      {
        mytheme: {
          primary: "#0099ff",
          secondary: "#66ccff",
          accent: "#99ffcc",
          neutral: "#cccccc",
          "base-100": "#ffffff",
          info: "#00cc99",
          success: "#33cccc",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
    ],
    darkTheme: "forest",
    base: true,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
