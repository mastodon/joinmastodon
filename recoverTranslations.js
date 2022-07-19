const fs = require("fs")

let archivedMessages = fs.readdirSync("./z_archive/locales")
let newSource = JSON.parse(fs.readFileSync("./locales/en.json", "utf-8"))

archivedMessages.forEach((localeFile) => {
  if (localeFile === "en.json") return // don't overwrite the source file

  let oldMessages = JSON.parse(
    fs.readFileSync(`./z_archive/locales/${localeFile}`, "utf-8")
  )

  let result = {}
  for (let newSourceKey in newSource) {
    if (oldMessages[newSourceKey]) {
      result[newSourceKey] = oldMessages[newSourceKey]
    }

    fs.writeFileSync(`./locales/${localeFile}`, JSON.stringify(result))
  }
})
