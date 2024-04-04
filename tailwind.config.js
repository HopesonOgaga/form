/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ["Reddit Mono", "monospace"] 
    },
  },
  plugins: [],
};
