const defaultLocale = "en"

const locales = [
  { code: "ar", language: "العربية", dir: "rtl" },
  { code: "be", language: "Беларуская" },
  { code: "ca", language: "Català" },
  { code: "cs", language: "Čeština" },
  { code: "cy", language: "Cymraeg" },
  { code: "de", language: "Deutsch" },
  { code: "el", language: "Ελληνικά" },
  { code: "en", language: "English" },
  { code: "eo", language: "Esperanto" },
  { code: "es-AR", language: "Español (Argentina)" },
  { code: "es", language: "Español" },
  { code: "eu", language: "Euskara" },
  { code: "fa", language: "فارسی", dir: "rtl" },
  { code: "fi", language: "Suomi" },
  { code: "fil", language: "Filipino" },
  { code: "fr", language: "Français" },
  { code: "fy", language: "Frysk" },
  { code: "gd", language: "Gàidhlig" },
  { code: "gl", language: "Galego" },
  { code: "hi", language: "हिन्दी" },
  { code: "hu", language: "Magyar" },
  { code: "ia", language: "Interlingua" },
  { code: "id", language: "Bahasa Indonesia" },
  { code: "is", language: "Íslenska" },
  { code: "it", language: "Italiano" },
  { code: "ja", language: "日本語" },
  { code: "ko", language: "한국어" },
  { code: "ku", language: "Kurmancî" },
  { code: "lt", language: "Lietuvių" },
  { code: "nl-NL", language: "Nederlands" },
  { code: "no", language: "Norsk" },
  { code: "oc", language: "Occitan" },
  { code: "pl", language: "Polski" },
  { code: "pt", language: "Português" },
  { code: "pt-BR", language: "Português (Brasil)" },
  { code: "ru", language: "Русский" },
  { code: "si", language: "සිංහල" },
  { code: "sl", language: "Slovenščina" },
  { code: "sq", language: "Shqip" },
  { code: "sv", language: "Svenska" },
  { code: "th", language: "ภาษาไทย" },
  { code: "tr", language: "Türkçe" },
  { code: "uk", language: "Українська" },
  { code: "vi", language: "Tiếng Việt" },
  { code: "zh", language: "中文" },
  { code: "zh-TW", language: "繁體中文" },
]

// these language translations have been started
// but the home page is not completely translated
// and the overall coverage is minimal, disable
// for now
const locales_disabled = [
  { code: "bn", language: "বাংলা" },
  { code: "ga", language: "Gaeilge" },
  { code: "he", language: "עברית", dir: "rtl" },
  { code: "kab", language: "Taqbaylit" },
  { code: "lv", language: "Latviešu" },
  { code: "sk", language: "Slovenčina" },
]

module.exports = {
  defaultLocale,
  locales,
}
