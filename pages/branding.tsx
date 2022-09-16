import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/image"

import screenshotComposeLight from "../public/screenshots/iphone-13-pro-max/Compose.light.1.iPhone 13 Pro Max_1_FB1EB7D6-DEF2-462D-9F4F-D622DF75032C.png"
import screenshotHomeLight from "../public/screenshots/iphone-13-pro-max/Home.light.1.iPhone 13 Pro Max_1_E97CFEC9-A24C-4B12-87ED-D2CCD8F17A69.png"
import screenshotProfileLight from "../public/screenshots/iphone-13-pro-max/Profile.light.1.iPhone 13 Pro Max_1_EB8AD280-7875-47A1-A556-D433BE7590E7.png"
import screenshotServerRulesLight from "../public/screenshots/iphone-13-pro-max/ServerRules.light.1.iPhone 13 Pro Max_1_9B7DD752-9F56-4CA5-8A92-4E19B9FEB281.png"
import screenshotThreadLight from "../public/screenshots/iphone-13-pro-max/Thread.light.1.iPhone 13 Pro Max_1_3C6768BF-C8B6-452B-8DD0-4C7919FBBE2F.png"

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

const Logo = ({ label, src, className }: { label: string, src: string, className?: string }) => (
  <div className="flex items-center justify-center rounded-md bg-[url('/ui/void.png')] border border-gray-4 col-span-12 md:col-span-4">
    <a
      download
      title={label}
      href={src}
      className={classNames("flex items-center w-full h-full rounded-md justify-center p-8 transition-colors", className)}
    >
      <img
        src={src}
        alt=""
        className="h-16 w-auto md:h-18 lg:h-20"
      />
    </a>
  </div>
)

/** This page does not require translations */
const Branding = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 pt-16 mb-8">Brand Toolkit</h1>
        <p className="sh1">
          Learn our branding guidelines, download our logos and icons, or use our brand colors for&nbsp;your&nbsp;projects.
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
            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Wordmark</h4>
              <p className="sh1">Please do not modify the marks or use them in a confusing way. If you are unsure, reach out to us.</p>

              <div className="grid grid-cols-12 gap-gutter py-10">
                {[
                  {
                    label: "Download the purple SVG Logo with wordmark",
                    src: "/logos/logo-full-purple.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                  {
                    label: "Download the black SVG Logo with wordmark",
                    src: "/logos/logo-full-black.svg",
                    background: "bg-white/70 hocus:bg-white",
                  },
                  {
                    label: "Download the white SVG Logo with wordmark",
                    src: "/logos/logo-full-white.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                ].map((image, imageIndex) => (
                  <Logo
                    key={image.src}
                    src={image.src}
                    label={image.label}
                    className={image.background}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Mark only</h4>
              <p className="sh1">Use these only when the Mastodon brand has been clearly established in the design.</p>

              <div className="grid grid-cols-12 gap-gutter py-10">
                {[
                  {
                    label: "Download the purple SVG Logo",
                    src: "/logos/logo-purple.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                  {
                    label: "Download the black SVG Logo",
                    src: "/logos/logo-black.svg",
                    background: "bg-white/70 hocus:bg-white",
                  },
                  {
                    label: "Download the white SVG Logo",
                    src: "/logos/logo-white.svg",
                    background: "bg-black/70 hocus:bg-black",
                  },
                ].map((image, imageIndex) => (
                  <Logo
                    key={image.src}
                    src={image.src}
                    label={image.label}
                    className={image.background}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4">Clear space</h4>
              <p className="sh1">
                When using our logo, please ensure that you give it room
                to&nbsp;breathe! At least 36px on all sides please.
              </p>

              <div className="flex flex-col items-center justify-center py-10 sm:flex-row lg:justify-between">
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

            <div className="col-span-12 lg:col-span-6">
              <h4 className="h4 mb-4 md:mb-14">Usage hierarchy</h4>

              <div className="flex justify-center">
                <ol className="list-decimal text-start">
                  <li className="mb-4">
                    <strong className="block">Purple mark and white wordmark on black background.</strong>
                    This is the preferred option.
                  </li>

                  <li className="mb-4">
                    <strong className="block">White mark and black wordmark on white background.</strong>
                    If the first option is not possible.
                  </li>

                  <li className="mb-4">
                    <strong className="block">Black mark and white wordmark on black background.</strong>
                    If incorporating color is not an option.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        }
      />
      <BrandSection
        title="Our colors"
        preview={
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 grid grid-cols-2 gap-gutter lg:col-span-8 lg:col-start-3">
              {["#6364FF", "#563ACC"].map((hex) => (
                <div key={hex} className="flex flex-col gap-2 text-left">
                  <div
                    style={{ backgroundColor: hex }}
                    className="h-20 rounded md:h-24"
                  >
                    <div className="p-4 pt-14 text-white/60 font-black">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-12 grid grid-cols-3 gap-gutter lg:col-span-6 lg:col-start-4">
              {["#17063B", "#2F0C7A", "#858AFA"].map((hex) => (
                <div key={hex} className="flex flex-col gap-2 text-left">
                  <div
                    style={{ backgroundColor: hex }}
                    className="h-20 rounded md:h-24"
                  >
                    <div className="p-4 pt-14 text-white/60 font-black">{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <BrandSection
        title="Product screenshots"
        copy="Need some screenshots? We've got you covered."
        preview={
          <div className="flex gap-gutter">
            {[
              {
                src: screenshotComposeLight,
                download: "/screenshots/iphone-13-pro-max/Compose.light.1.iPhone 13 Pro Max_1_FB1EB7D6-DEF2-462D-9F4F-D622DF75032C.png",
                title: "Compose, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotHomeLight,
                download: "/screenshots/iphone-13-pro-max/Home.light.1.iPhone 13 Pro Max_1_E97CFEC9-A24C-4B12-87ED-D2CCD8F17A69.png",
                title: "Home, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotProfileLight,
                download: "/screenshots/iphone-13-pro-max/Profile.light.1.iPhone 13 Pro Max_1_EB8AD280-7875-47A1-A556-D433BE7590E7.png",
                title: "Profile, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotServerRulesLight,
                download: "/screenshots/iphone-13-pro-max/ServerRules.light.1.iPhone 13 Pro Max_1_9B7DD752-9F56-4CA5-8A92-4E19B9FEB281.png",
                title: "Server rules, light mode, iPhone 13 Pro Max",
              }, {
                src: screenshotThreadLight,
                download: "/screenshots/iphone-13-pro-max/Thread.light.1.iPhone 13 Pro Max_1_3C6768BF-C8B6-452B-8DD0-4C7919FBBE2F.png",
                title: "Thread, light mode, iPhone 13 Pro Max",
              },
            ].map(screenshot => (
              <a key={screenshot.title} href={screenshot.download} title={screenshot.title} download className="block rounded overflow-hidden border border-gray-4 hocus:ring ring-blurple-500">
                <Image src={screenshot.src} alt="" />
              </a>
            ))}
          </div>
        }
      />

      <Head>
        <title>Brand Toolkit - Mastodon</title>
        <meta
          property="og:title"
          content="Brand Toolkit for Mastodon"
        />
        <meta
          property="og:description"
          content="Learn our branding guidelines, download our logos and icons, or use our brand colors for your projects."
        />
        <meta
          property="description"
          content="Learn our branding guidelines, download our logos and icons, or use our brand colors for your projects."
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
