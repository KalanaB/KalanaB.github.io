/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/components/nav/Navigation.jsx"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
};


