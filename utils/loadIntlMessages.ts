import fs from "fs/promises"
import { GetStaticPropsContext } from "next"
import path from "path"

export default async function loadI18nMessages({
  locale,
  defaultLocale,
}: GetStaticPropsContext) {
  // If the default locale is being used we can skip it
  if (locale === defaultLocale) {
    return {}
  }

  if (locale !== defaultLocale) {
    const languagePath = path.join(process.cwd(), `locales/${locale}.json`)
    try {
      const contents = await fs.readFile(languagePath, "utf-8")
      return JSON.parse(contents) as Record<string, string>
    } catch (error) {
      console.error(error)
    }
  }
}
