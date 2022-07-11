/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      h1: rem(68),
      h2: rem(50),
      h3: rem(42),
      h4: rem(38),
      h5: rem(28),
      h6: rem(22),
      sh1: rem(22),
      b1: rem(20),
      b2: rem(16),
      b3: rem(14),
      b4: rem(12),
      c2: rem(9),
      c3: rem(6),
    },
    lineHeight: {
      h1: "calc(90 / 68)",
      h2: "calc(60 / 50)",
      h3: "calc(55 / 42)",
      h4: "calc(50 / 38)",
      h5: "calc(38 / 28)",
      h6: "calc(30 / 22)",
      sh1: "calc(30 / 22)",
      b1: "calc(30 / 20)",
      b2: "calc(24 / 16)",
      b3: "calc(17 / 14)",
      b4: "calc(17 / 12)",
      c2: "calc(19 / 9)",
      c3: "calc(17 / 6)"
    },
    letterSpacing: {
      heading: "0em",
      copy: "0.01em",
    },
    fontWeight: {
      400: 400,
      450: 450,
      600: 600,
      800: 800
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      nightshade: "#1D0023",
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
function rem(px) {
  return `${px / 16}rem`;
}