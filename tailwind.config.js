const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

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
    colors: {
      black: "#000000",
      gray: {
        0: "#333333",
        1: "#555555",
        2: "#9b9b9b",
        3: "#d4d4d4",
        4: "#f3f3f3",
        5: "#f6f6f6",
      },
      white: "#ffffff",
      nightshade: {
        50: "#fcefff",
        100: "#BD8DC8",
        300: "#834491",
        600: "#4E155A",
        900: "#1d0023", // "main"
      },
      eggplant: "#17063b",
      blurple: {
        300: "#858afa",
        500: "#6364ff",
        600: "#563acc", // "main"
        900: "#2f0c7a",
      },
      lime: "#baff3b",
      goldenrod: "#ffbe2e",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "Roboto", "\"Helvetica Neue\"", "Arial", "\"Noto Sans\"", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""],
      },
      fontWeight: {
        extranormal: 450,
      },
      letterSpacing: {
        semiwide: ".01em",
      },
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
        "safe-text": "0 0 30px #1d0023",
      },
    },
  },
  plugins: [
    /** CSS Logical Properties https://github.com/stevecochrane/tailwindcss-logical */
    require("tailwindcss-logical"),
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
    ...Object.keys(config.theme.colors).reduce((arr, k) => {
      if (typeof config.theme.colors[k] === "string") {
        arr.push(`bg-${k}`)
        return arr
      } else {
        return arr.concat(
          Object.keys(config.theme.colors[k]).map((s) => `bg-${k}-${s}`)
        )
      }
    }, []),
  ],
}
