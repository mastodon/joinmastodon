const plugin = require("tailwindcss/plugin")

function rem(px) {
  return `${px / 16}rem`
}

/** @type {import('tailwindcss').Config} */
const config = {
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
      h1: "calc(75 / 68)",
      h2: "calc(55 / 50)",
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
    colors: {
      black: "#000000",
      "gray-0": "var(--gray-0)",
      "gray-1": "var(--gray-1)",
      "gray-2": "var(--gray-2)",
      "gray-3": "var(--gray-3)",
      "gray-4": "var(--gray-4)",
      "gray-5": "var(--gray-5)",
      white: "#ffffff",
      nightshade: {
        DEFAULT: "#1d0023",
        50: "#fcefff",
        100: "#BD8DC8",
        300: "#834491",
        600: "#4E155A",
      },
      eggplant: "#17063b",
      "dark-blurple": "var(--dark-blurple)",
      "main-blurple": "var(--main-blurple)",
      "accent-blurple": "var(--accent-blurple)",
      "blurple-text-on-black": "var(--blurple-text-on-black)",
      lime: "var(--lime)",
      goldenrod: "var(--goldenrod)",
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
      dropShadow: {
        /** Used for text on hero images that may shift around  */
        "safe-text": "0 0 30px var(--nightshade)",
      },
    },
  },
  plugins: [
    /** CSS Logical Properties https://github.com/stevecochrane/tailwindcss-logical */
    require("tailwindcss-logical"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      /** A good default for hover states */
      addVariant("hocus", ["&:hover", "&:focus-visible"])
      /** Focus-visible inside of presentational containers */
      addVariant("focus-visible-within", ["&:has(:focus-visible)"])
    }),
  ],
}

module.exports = {
  ...config,
  safelist: [
    // needed for /guide
    ...Object.keys(config.theme.fontSize),
    ...Object.keys(config.theme.colors).map((k) => `bg-${k}`),
  ],
}
