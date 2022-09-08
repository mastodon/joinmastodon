import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

/** Default layout component */
export const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-site px-6 lg:px-16">
      <a
        className="sr-only top-0 left-0 z-20 block bg-dark-blurple text-white focus:not-sr-only focus:absolute focus:p-2"
        href="#main"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Head>
        <meta property="og:image" content="https://joinmastodon.org/preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
    </div>
  )
}

export default Layout
