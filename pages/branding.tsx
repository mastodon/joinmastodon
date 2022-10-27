import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/image"
import SVG from "react-inlinesvg"

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
  <section className="text-center col-span-12 md:col-start-3 md:col-end-11">
    <div className="full-width-bg">
      <div className="full-width-bg__inner flex flex-col items-center justify-center py-20">
        <h2 className="h3 max-w-[17ch]">{title}</h2>
        {copy && (
          <div className="b1 mt-2 flex max-w-[50ch] flex-col gap-8">{copy}</div>
        )}
        {ctas && <div className="mt-12 flex justify-center gap-12">{ctas}</div>}
      </div>
    </div>
    <div className="flex flex-col items-center justify-center pb-20">
      <div className="w-full">{preview}</div>
    </div>
  </section>
)

const Logo = ({ label, src, className }: { label: string, src: string, className?: string }) => (
  <div className="flex items-center justify-center rounded-md">
    <a
      download
      title={label}
      href={src}
      className={classNames("flex items-center w-full h-full rounded-md justify-center transition-colors", className)}
    >
      <img
        src={src}
        alt=""
        className="h-16 w-auto md:h-18 lg:h-20"
      />
    </a>
  </div>
)

const UsageRule = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center text-left gap-6">
      <SVG className="shrink-0" src="/icons/check.svg" />
      <p>{text}</p>
    </div>
  )
}

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
      <div className="grid grid-cols-12 gap-gutter">
        <BrandSection
          title="Wordmark"
          copy={
            <p>
              We take pride in the Mastodon logo and hope you do too.
              Please&nbsp;take a moment to think about how you apply it. If you
              want to use our art, please keep it tasteful!
            </p>
          }
          preview={
            <section>
              {[
                {
                  label: "Download the SVG wordmark with white text",
                  src: "/logos/wordmark-white-text.svg",
                  styles: "bg-eggplant hocus:bg-black p-16",
                },
                {
                  label: "Download the SVG wordmark with black text",
                  src: "/logos/wordmark-black-text.svg",
                  styles: "bg-white hocus:bg-gray-5 p-16",
                },
              ].map((image) => (

                <Logo
                  key={image.src}
                  src={image.src}
                  label={image.label}
                  className={image.styles}
                />
              ))}

              <UsageRule text="Use the main logo (black or white version) on a background that creates enough contrast to retain logo quality" />

              {[
                {
                  label: "Download the SVG wordmark with a white logo and black text",
                  src: "/logos/logo-full-black.svg",
                  styles: "bg-blurple-500 hocus:bg-blurple-600 p-16",
                },
                {
                  label: "Download the SVG wordmark with a black logo and white text",
                  src: "/logos/logo-full-white.svg",
                  styles: "bg-blurple-500 hocus:bg-blurple-600 p-16",
                },
              ].map((image) => (
                <Logo
                  key={image.src}
                  src={image.src}
                  label={image.label}
                  className={image.styles}
                />
              ))}
            </section>
          }
        />

        <BrandSection
          title="Mark only"
          copy={<p>Use these only when the Mastodon brand has been clearly established in the design.</p>}
          preview={
            <section>
              <div className="grid grid-cols-3 gap-gutter lg:gap-24 md:px-8">
                {[
                  {
                    label: "Download the purple SVG logo",
                    src: "/logos/logo-purple.svg",
                    styles: "bg-white hocus:bg-gray-5 p-4 aspect-square",
                  },
                  {
                    label: "Download the black SVG logo",
                    src: "/logos/logo-black.svg",
                    styles: "bg-white hocus:bg-gray-5 p-4 aspect-square",
                  },
                  {
                    label: "Download the white SVG logo",
                    src: "/logos/logo-white.svg",
                    styles: "bg-black hocus:bg-gray-0 p-4 aspect-square",
                  },

                ].map((image) => (
                  <Logo
                    key={image.src}
                    src={image.src}
                    label={image.label}
                    className={image.styles}
                  />
                ))}
              </div>
              <UsageRule text="Use the small version of the logo when the brand has already been established and / or space is limited to allow appropriate clear space around the main Mastodon logo" />
              <UsageRule text="Use the one color black or white version of the logo in applications of print or letterheadwhen only one print color is available" />
            </section>
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
      </div>

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
