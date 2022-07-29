import Footer from "./Footer"
import Header from "./Header"

/** Default layout component */
export const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-site px-6 lg:px-16">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
