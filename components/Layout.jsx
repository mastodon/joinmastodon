import Footer from "./Footer"

export const Layout = ({ children }) => {
  return <div className="mx-auto max-w-[90rem] px-6 lg:px-16">
    {children}
    <Footer />
  </div>
}

export default Layout
