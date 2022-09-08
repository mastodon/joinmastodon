import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import LinkButton from "../components/LinkButton"
import classNames from "classnames"

const BrandSection = ({ title, copy, ctas, preview }: {
  title: React.ReactNode | string
  copy: React.ReactNode
  ctas?: React.ReactNode
  preview: React.ReactNode
}) => (
  <section className="text-center">
    <div className="full-width-bg">
      <div className="full-width-bg__inner flex flex-col items-center justify-center py-20">
        <h2 className="h1 mb-8 max-w-[17ch] md:mb-12">{title}</h2>
        <div className="b1 mb-12 flex max-w-[50ch] flex-col gap-8">{copy}</div>
        {ctas && <div className="flex justify-center gap-12">{ctas}</div>}
      </div>
    </div>
    <div className="full-width-bg flex flex-col items-center justify-center bg-gray-5 py-20">
      <div className="full-width-bg__inner">{preview}</div>
    </div>
  </section>
)

/** This page does not require translations */
const Brand = () => (
  <div dir="ltr" className="[unicode-bidi:plaintext] -mb-footer-offset">
    <Hero>
      <h1 className="h1 mb-4">Brand Toolkit</h1>
      <p className="sh1">
        Thanks for stopping by! You’ll find everything you assets and guidelines
        for how to use our logo. Questions? Feel free to reach out to us!
      </p>
    </Hero>
    <BrandSection
      title="Our Logos"
      copy={
        <p>
          We take pride in the Mastodon logo and hope you do too. Please&nbsp;take a
          moment to think about how you apply it. If you want to use our art,
          please keep it tasteful!
        </p>
      }
      preview={
        <div className="grid grid-cols-12 gap-gutter">
          <a download href="/logos/logo-purple.svg" className="col-span-4 md:col-span-3 grid aspect-square items-center justify-center rounded bg-eggplant p-8 md:col-start-3">
            <img src="/logos/logo-purple.svg" alt="" />
          </a>
          <a download href="/logos/logo-full-purple.svg" className="col-span-8 md:col-span-5 grid items-center justify-center rounded bg-eggplant p-8">
            <img src="/logos/logo-full-purple.svg" alt="" />
          </a>
          <a download href="/logos/logo-white.svg" className="col-span-4 md:col-span-3 grid aspect-square items-center justify-center rounded bg-gray-1 p-8 md:col-start-3">
            <img src="/logos/logo-white.svg" alt="" />
          </a>
          <a download href="/logos/logo-full-white.svg" className="col-span-8 md:col-span-5 grid items-center justify-center rounded bg-gray-1 p-8">
            <img src="/logos/logo-full-white.svg" alt="" />
          </a>
          <a download href="/logos/logo-black.svg" className="col-span-4 md:col-span-3 grid aspect-square items-center justify-center rounded bg-gray-3 p-8 md:col-start-3">
            <img src="/logos/logo-black.svg" alt="" />
          </a>
          <a download href="/logos/logo-full-black.svg" className="col-span-8 md:col-span-5 grid items-center justify-center rounded bg-gray-3 p-8">
            <img src="/logos/logo-full-black.svg" alt="" />
          </a>
        </div>
      }
    />
    <BrandSection
      title="Sample toots!"
      copy={
        <p>
          If you’d like to make a mockup of a toot for media or news, please&nbsp;use
          the template below to get an accurate
        </p>
      }
      ctas={
        <LinkButton size="large" href="">
          Figma File
        </LinkButton>
      }
      preview={
        <div className="grid gap-gutter sm:grid-cols-2 pb-footer-offset">
          <img
            className="w-full flex-auto"
            src="/samples/sample-toot.svg"
            alt=""
          />
          <img
            className="w-full flex-auto"
            src="/samples/sample-boost.svg"
            alt=""
          />
        </div>
      }
    />

    <Head>
      <title>Brand Toolkit - Mastodon</title>
      <meta property="og:title" content="Brand Toolkit for joinmastodon.org" />
    </Head>
  </div>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Brand
