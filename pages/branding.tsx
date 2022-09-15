import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/branding_hero.png"

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
  <Layout transparentHeader={false}>
    <div dir="ltr" className="-mb-footer-offset [unicode-bidi:plaintext]">
      <Hero homepage desktopImage={heroImage} mobileImage={heroImage} safeTextShadow={false}> 
        <h1 className="h1 pt-16 mb-8">Brand Toolkit</h1>
        <p className="sh1">
          Download our logos or use our brand colors for&nbsp;your&nbsp;projects
        </p>
      </Hero>
      <BrandSection
        title="Our Logos"
        copy={
          <p>
            We take pride in the Mastodon logo and hope you do too.
            Please&nbsp;take a moment to think about how you apply it. If you
            want to use our art, please keep it tasteful!
          </p>
        }
        preview={
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 grid grid-cols-12 gap-gutter rounded bg-gray-2 py-10 lg:col-span-8 lg:col-start-3 lg:grid-cols-8">
              {[
                {
                  label: "Download the purple SVG Logo",
                  src: "/logos/logo-purple.svg",
                },
                {
                  label: "Download the purple SVG Logo with wordmark",
                  src: "/logos/logo-full-purple.svg",
                },
                {
                  label: "Download the white SVG Logo",
                  src: "/logos/logo-white.svg",
                },
                {
                  label: "Download the white SVG Logo with wordmark",
                  src: "/logos/logo-full-white.svg",
                },
                {
                  label: "Download the black SVG Logo",
                  src: "/logos/logo-black.svg",
                },
                {
                  label: "Download the black SVG Logo with wordmark",
                  src: "/logos/logo-full-black.svg",
                },
              ].map((image, imageIndex) => (
                <div
                  key={image.src}
                  className={classNames(
                    "flex items-center justify-center rounded py-4",
                    imageIndex % 2 === 0
                      ? "col-span-4 lg:col-span-3"
                      : "col-span-8 lg:col-span-5"
                  )}
                >
                  <a
                    download
                    aria-label={image.label}
                    href={image.src}
                    className={classNames(
                      "flex items-center justify-center rounded p-4 transition-colors hocus:bg-gray-3",
                      imageIndex % 2 === 0 ? "aspect-square" : ""
                    )}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="md:h-18 h-16 w-auto lg:h-20"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <BrandSection
        title="Clear space"
        copy={
          <p>
            When using our logo, please ensure that you give it room
            to&nbsp;breathe! At least 36px on all sides please.
          </p>
        }
        preview={
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 flex flex-col items-center justify-center gap-gutter rounded py-8 sm:flex-row lg:col-span-6 lg:col-start-4 lg:justify-between">
              {["/logos/logo-purple.svg", "/logos/logo-full-purple.svg"].map(
                (src) => (
                  <div
                    className="relative rounded bg-eggplant p-[36px] text-blurple-600 shadow-[currentColor_0_0_0_1px_inset]"
                    key={src}
                  >
                    {/* everything except for the image is a guide mark */}
                    <div className="absolute top-0 left-0 h-[36px] w-[36px] rounded-full border" />
                    <div className="absolute top-0 right-0 h-[36px] w-[36px] rounded-full border" />
                    <div className="absolute bottom-0 left-0 h-[36px] w-[36px] rounded-full border" />
                    <div className="absolute bottom-0 right-0 h-[36px] w-[36px] rounded-full border" />
                    <div className="absolute top-0 left-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                    <div className="absolute top-0 right-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                    <div className="absolute bottom-0 left-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                    <div className="absolute bottom-0 right-0 m-[9px] h-[18px] w-[18px] rounded-full border" />
                    <div className="absolute border-x inset-block-0 inset-inline-[35px]" />
                    <div className="absolute border-y inset-inline-0 inset-block-[35px]" />
                    <img src={src} alt="" className="w-auto" />
                  </div>
                )
              )}
            </div>
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
        <meta
          property="og:title"
          content="Brand Toolkit for joinmastodon.org"
        />
      </Head>
    </div>
  </Layout>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Branding
