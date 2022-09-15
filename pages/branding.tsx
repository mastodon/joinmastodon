import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import LinkButton from "../components/LinkButton"
import classNames from "classnames"

const BrandSection = ({
  title,
  copy,
  ctas,
  preview,
}: {
  title: React.ReactNode | string
  copy?: React.ReactNode
  ctas?: React.ReactNode
  preview: React.ReactNode
}) => (
  <section className="text-center">
    <div className="full-width-bg">
      <div className="full-width-bg__inner flex flex-col items-center justify-center py-20">
        <h2 className="h3 max-w-[17ch]">{title}</h2>
        {copy && (
          <div className="b1 mt-2 flex max-w-[50ch] flex-col gap-8">{copy}</div>
        )}
        {ctas && <div className="mt-12 flex justify-center gap-12">{ctas}</div>}
      </div>
    </div>
    <div className="full-width-bg flex flex-col items-center justify-center pb-20">
      <div className="full-width-bg__inner">{preview}</div>
    </div>
  </section>
)

/** This page does not require translations */
const Branding = () => (
  <div dir="ltr" className="-mb-footer-offset [unicode-bidi:plaintext]">
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
          We take pride in the Mastodon logo and hope you do too.
          Please&nbsp;take a moment to think about how you apply it. If you want
          to use our art, please keep it tasteful!
        </p>
      }
      preview={
        <div className="grid grid-cols-12 gap-gutter">
          <a
            download
            aria-label="Download the purple SVG Logo"
            href="/logos/logo-purple.svg"
            className="col-span-4 grid aspect-square h-full max-w-full items-center justify-center rounded bg-eggplant p-9 md:col-span-3 md:col-start-3"
          >
            <img src="/logos/logo-purple.svg" alt="" />
          </a>
          <a
            download
            aria-label="Download the purple SVG Logo with wordmark"
            href="/logos/logo-full-purple.svg"
            className="col-span-8 grid items-center justify-center rounded bg-eggplant p-9 md:col-span-5"
          >
            <img src="/logos/logo-full-purple.svg" alt="" />
          </a>
          <a
            download
            aria-label="Download the white SVG Logo"
            href="/logos/logo-white.svg"
            className="col-span-4 grid aspect-square h-full max-w-full items-center justify-center rounded bg-gray-1 p-9 md:col-span-3 md:col-start-3"
          >
            <img src="/logos/logo-white.svg" alt="" />
          </a>
          <a
            download
            aria-label="Download the white SVG Logo with wordmark"
            href="/logos/logo-full-white.svg"
            className="col-span-8 grid items-center justify-center rounded bg-gray-1 p-9 md:col-span-5"
          >
            <img src="/logos/logo-full-white.svg" alt="" />
          </a>
          <a
            download
            aria-label="Download the black SVG Logo"
            href="/logos/logo-black.svg"
            className="col-span-4 grid aspect-square h-full max-w-full items-center justify-center rounded bg-gray-3 p-9 md:col-span-3 md:col-start-3"
          >
            <img src="/logos/logo-black.svg" alt="" />
          </a>
          <a
            download
            aria-label="Download the black SVG Logo with wordmark"
            href="/logos/logo-full-black.svg"
            className="col-span-8 grid items-center justify-center rounded bg-gray-3 p-9 md:col-span-5"
          >
            <img src="/logos/logo-full-black.svg" alt="" />
          </a>
        </div>
      }
    />
    <BrandSection
      title="Clear space"
      copy={
        <p>
          When using our logo, please ensure that you give it room to breathe!
          At least 36px on all sides please.
        </p>
      }
      preview={
        <div className="flex justify-center gap-gutter">
          {["/logos/logo-purple.svg", "/logos/logo-full-purple.svg"].map(
            (src) => (
              <div className="relative rounded bg-eggplant text-blurple-600 p-[36px] shadow-[currentColor_0_0_0_1px_inset]" key={src}>
                <div className="absolute rounded-full w-[36px] h-[36px] border top-0 left-0" />
                <div className="absolute rounded-full w-[36px] h-[36px] border top-0 right-0" />
                <div className="absolute rounded-full w-[36px] h-[36px] border bottom-0 left-0" />
                <div className="absolute rounded-full w-[36px] h-[36px] border bottom-0 right-0" />
                <div className="absolute rounded-full w-[18px] h-[18px] border m-[9px] top-0 left-0" />
                <div className="absolute rounded-full w-[18px] h-[18px] border m-[9px] top-0 right-0" />
                <div className="absolute rounded-full w-[18px] h-[18px] border m-[9px] bottom-0 left-0" />
                <div className="absolute rounded-full w-[18px] h-[18px] border m-[9px] bottom-0 right-0" />
                <div className="absolute border-x inset-block-0 inset-inline-[35px]" />
                <div className="absolute border-y inset-inline-0 inset-block-[35px]" />
                <img src={src} alt="" className="h-24 w-auto" />
              </div>
            )
          )}
        </div>
      }
    />
    <BrandSection
      title="Our colors"
      preview={
        <div className="grid grid-cols-12 flex-col gap-gutter pb-footer-offset">
          <div className="col-span-12 grid grid-cols-2 gap-gutter lg:col-span-8 lg:col-start-3">
            {["#6364FF", "#563ACC"].map((hex) => (
              <div key={hex} className="flex flex-col gap-2 text-left">
                <div
                  style={{ backgroundColor: hex }}
                  className="h-20 rounded md:h-24"
                />
                <span>{hex}</span>
              </div>
            ))}
          </div>
          <div className="col-span-12 grid grid-cols-3 gap-gutter lg:col-span-6 lg:col-start-4">
            {["#17063B", "#2F0C7A", "#858AFA"].map((hex) => (
              <div key={hex} className="flex flex-col gap-2 text-left">
                <div
                  style={{ backgroundColor: hex }}
                  className="h-20 rounded md:h-24"
                />
                <span>{hex}</span>
              </div>
            ))}
          </div>
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
export default Branding
