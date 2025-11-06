const config = {
  "*": "prettier --ignore-unknown --write",
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "data/roadmap/*.md": "tsx scripts/lint-roadmap.ts",
}

export default config
