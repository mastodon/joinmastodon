// Formatter file for extracting messages. Replaces default formatter. see https://formatjs.io/docs/tooling/cli#--format-path
// Message files will be in this format:
// {
//   [key]: string
// }

const format = (msgs) => {
  const results = {}
  for (const key in msgs) {
    results[key] = msgs[key].defaultMessage
  }
  return results
}
module.exports = { format }
