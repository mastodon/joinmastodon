import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

/** Default layout component */
export const Layout = ({
  children,
  transparentHeader,
}: {
  children: React.ReactNode
  transparentHeader?: boolean
}) => {
  return (
    <div className="mx-auto max-w-site px-6 lg:px-16">
      <a
        className="bg-blurple-900 sr-only top-0 left-0 z-20 block text-white focus:not-sr-only focus:absolute focus:p-2"
        href="#main"
      >
        Skip to main content
      </a>
      <Header transparent={transparentHeader} />
      <main id="main">{children}</main>
      <Footer />
      <Head>
        <meta
          property="og:image"
          content="https://joinmastodon.org/preview.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
    </div>
  )
}

export default Layout
