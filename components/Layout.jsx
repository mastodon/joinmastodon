import Footer from "./Footer"
import Header from "./Header"

import { useRouter } from "next/router"
import { locales } from "../data/locales"

export const Layout = ({ children }) => {
  const { locale } = useRouter()
  const dir = locales.find((l) => l.code === locale)?.dir || "ltr"

  return (
    <div className="mx-auto max-w-site px-6 lg:px-16" dir={dir}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
