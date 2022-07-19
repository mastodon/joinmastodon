import Footer from "./Footer"
import Header from "./Header"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
