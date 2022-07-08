/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      eggplant: "#17063b",
      "dark-blurple": "#2f0c7a",
      "main-blurple": "#563acc",
      "accent-blurple": "#6364ff",
      "blurple-text-on-black": "#858afa",
      lime: "#baff3b",
      goldenrod: "#ffbe2e",
      "gray-1": "#555555",
      "gray-2": "#9b9b9b",
      "gray-3": "#d4d4d4",
      "gray-4": "#f3f3f3",
      "gray-5": "#f6f6f6",
    },
    extend: {
      backgroundImage: {
        "blurple-gradient": `linear-gradient(0deg, #563acc 12.87%, #6364ff 88.62%)`,
      },
    },
  },
  plugins: [],
}
