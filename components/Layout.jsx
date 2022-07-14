import Header from "./Header"
import Footer from "./Footer"

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
