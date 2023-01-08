/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/indexedDB.html"],
  darkMode: false,
  content: ["./index.html", "./src/**/*.{js,jsx}", "/components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    }
  },
  plugins: []
};
