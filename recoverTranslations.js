const fs = require("fs")

let archivedMessages = fs.readdirSync("./z_archive/locales")
let oldDefaultMessages = JSON.parse(
  fs.readFileSync("./z_archive/locales/old_default_messages.json", "utf-8")
)
let newSource = JSON.parse(fs.readFileSync("./locales/en.json", "utf-8"))

archivedMessages.forEach((localeFile) => {
  if (localeFile === "en.json" || localeFile === "old_default_messages.json")
    return // don't overwrite the source file or old default messages

  let oldMessages = JSON.parse(
    fs.readFileSync(`./z_archive/locales/${localeFile}`, "utf-8")
  )

  let result = {}
  for (let newSourceKey in newSource) {
    for (let oldDefaultMessageKey in oldDefaultMessages) {
      if (
        oldDefaultMessages[oldDefaultMessageKey].defaultMessage ===
        newSource[newSourceKey]
      ) {
        result[newSourceKey] = oldMessages[oldDefaultMessageKey]
      }
    }
  }

  fs.writeFileSync(`./locales/${localeFile}`, JSON.stringify(result))
})
