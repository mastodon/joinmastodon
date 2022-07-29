const plugin = require("tailwindcss/plugin")

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
      c3: "calc(17 / 6)",
    },
    letterSpacing: {
      heading: "0em",
      copy: "0.01em",
    },
    fontWeight: {
      400: 400,
      450: 450,
      600: 600,
      700: 700,
      800: 800,
    },
    boxShadow: {
      DEFAULT: "0px 4px 15px rgba(0, 0, 0, 0.1);",
    },
    colors: {
      black: "var(--black)",
      white: "var(--white)",
      nightshade: "var(--nightshade)",
      eggplant: "var(--eggplant)",
      "dark-blurple": "var(--dark-blurple)",
      "main-blurple": "var(--main-blurple)",
      "accent-blurple": "var(--accent-blurple)",
      "blurple-text-on-black": "var(--blurple-text-on-black)",
      lime: "var(--lime)",
      goldenrod: "var(--goldenrod)",
      "gray-1": "var(--gray-1)",
      "gray-2": "var(--gray-2)",
      "gray-3": "var(--gray-3)",
      "gray-4": "var(--gray-4)",
      "gray-5": "var(--gray-5)",
    },
    extend: {
      backgroundImage: {
        "blurple-gradient": `linear-gradient(0deg, #563acc 12.87%, #6364ff 88.62%)`,
      },
      gap: {
        gutter: "var(--gutter-width)",
      },
      maxWidth: {
        site: "90rem",
      },
      spacing: {
        26: "6.5rem",
        "footer-offset": "var(--footer-offset)",
      },
    },
  },
  plugins: [
    require("tailwindcss-logical"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      addVariant("focus-visible-within", ["&:has(:focus-visible)"])
    }),
  ],
}
function rem(px) {
  return `${px / 16}rem`
}
