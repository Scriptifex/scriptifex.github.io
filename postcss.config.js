module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    //require("postcss-nested"),
    ...(process.env.NODE_ENV == "production" ? [require("cssnano")({ preset: "default" })] : []),
  ],
};
/*module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    //...(process.env.NODE_ENV == "production" ? [require("cssnano")({ preset: "default" })] : []),
  },
};*/
