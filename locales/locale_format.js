const format = (msgs) => {
  const results = {}
  for (const key in msgs) {
    results[key] = msgs[key].defaultMessage
  }
  return results
}
module.exports = { format }
