const fs = require("fs")

let oldTranslationFiles = fs.readdirSync("./z_archive/locales")
let oldSource = JSON.parse(
  fs.readFileSync("./z_archive/locales/en.json", "utf-8")
)
let newSource = JSON.parse(fs.readFileSync("./locales/en.json", "utf-8"))

oldTranslationFiles.forEach((localeFile) => {
  if (localeFile === "en.json" || localeFile === "old_default_messages.json")
    return // don't overwrite the source file or old default messages

  let oldTranslations = JSON.parse(
    fs.readFileSync(`./z_archive/locales/${localeFile}`, "utf-8")
  )

  let result = {}
  for (let newSourceKey in newSource) {
    for (let oldSourceKey in oldSource) {
      if (oldSource[oldSourceKey] === newSource[newSourceKey]) {
        result[newSourceKey] = oldTranslations[oldSourceKey]
      }
    }
  }

  fs.writeFileSync(`./locales/${localeFile}`, JSON.stringify(result))
})
