const config = {
  "*": "prettier --ignore-unknown --write",
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
}

export default config
