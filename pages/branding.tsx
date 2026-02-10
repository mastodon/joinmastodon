import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/legacy/image"
import colors from "../data/colors"

import screenshotComposeLight from "../public/screenshots/android/Compose-0b1ddc94-d84d-4376-b957-9f676e851964.png"
import screenshotHomeLight from "../public/screenshots/android/HomeTimeline-add072f5-fb82-41d6-a1b1-b42707d46cac.png"
import screenshotProfileLight from "../public/screenshots/android/Profile-1a3889e8-43a3-4607-88cf-448ace95859a.png"
import screenshotServerRulesLight from "../public/screenshots/android/InstanceRules-99b01960-0551-4f26-bd69-eee3c0d9bcf5.png"
import screenshotThreadLight from "../public/screenshots/android/Thread-e4976e5a-7766-4ffa-bab1-7e26f54cf47c.png"

import CheckIcon from "../public/icons/check.svg?inline"
import LogoPurple from "../public/logos/logo-purple.svg?inline"
import WordmarkWhiteText from "../public/logos/wordmark-white-text.svg?inline"

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
  <section className="col-span-12 grid gap-16 text-center md:col-start-3 md:col-end-11">
    <div className="full-width-bg">
      <div className="full-width-bg__inner flex flex-col items-center justify-center pt-20">
        <h2 className="h3 max-w-[17ch]">{title}</h2>
        {copy && (
          <div className="b1 mt-2 flex max-w-[50ch] flex-col gap-8">{copy}</div>
        )}
        {ctas && <div className="mt-12 flex justify-center gap-12">{ctas}</div>}
      </div>
    </div>
    {preview}
  </section>
)

const Logo = ({
  label,
  src,
  className,
}: {
  label: string
  src: string
  className?: string
}) => (
  <div className="flex items-center justify-center rounded-md">
    <a
      download
      title={label}
      href={src}
      className={classNames(
        "flex h-full w-full items-center justify-center rounded-md transition-colors",
        className
      )}
    >
      <div className="md:h-18 relative h-16 w-full lg:h-20">
        <Image src={src} alt="" layout="fill" />
      </div>
    </a>
  </div>
)

const UsageRule = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-6 text-left">
      <CheckIcon className="shrink-0 fill-blurple-500" />
      <p>{text}</p>
    </div>
  )
}

/** This page does not require translations */
const Branding = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 mb-8 pt-16">Brand Toolkit</h1>
        <p className="sh1">
          Learn our branding guidelines, download our logos and icons, or use
          our brand colors for&nbsp;your&nbsp;projects.
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
            <>
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
                  label:
                    "Download the SVG wordmark with a white logo and black text",
                  src: "/logos/logo-full-black.svg",
                  styles: "bg-blurple-500 hocus:bg-blurple-600 p-16",
                },
                {
                  label:
                    "Download the SVG wordmark with a black logo and white text",
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

              <UsageRule text="Use a black or white version of the logo when contrast can not be maintained with the main logo — for example above, using the main brand color for a background" />
            </>
          }
        />

        <BrandSection
          title="Mark only"
          copy={
            <p>
              Use these only when the Mastodon brand has been clearly
              established in the design.
            </p>
          }
          preview={
            <>
              <div className="grid grid-cols-3 gap-gutter md:px-8 lg:gap-24">
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
              <UsageRule text="Use the one color black or white version of the logo in applications of print or letterhead when only one print color is available" />
            </>
          }
        />

        <BrandSection
          title="Clear space"
          copy={
            <p>
              When using our logo, please ensure that you give it room to
              breathe! At least 36px on all sides please.
            </p>
          }
          preview={
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden sm:flex-row md:gap-32">
              {[LogoPurple, WordmarkWhiteText].map((Svg, i) => (
                <div
                  className="relative rounded bg-eggplant p-[36px] text-blurple-600 shadow-[currentColor_0_0_0_1px_inset]"
                  key={i}
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

                  <Svg />
                </div>
              ))}
            </div>
          }
        />

        <BrandSection
          title="Our colors"
          preview={
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 grid grid-cols-2 gap-gutter">
                {colors.slice(0, 2).map(({ hex, pantone, cmyk }) => (
                  <div key={hex} className="flex flex-col gap-2 text-left">
                    <div
                      style={{ backgroundColor: hex }}
                      className="h-28 rounded"
                    >
                      <div className="p-4 pt-14 text-white">
                        <div className="font-black">{hex}</div>
                        <div className="c2">
                          Pantone {pantone} &bull; CMYK {cmyk}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-12 grid grid-cols-3 gap-gutter lg:col-span-10 lg:col-start-2">
                {colors.slice(2).map(({ hex, pantone, cmyk }) => (
                  <div key={hex} className="flex flex-col gap-2 text-left">
                    <div
                      style={{ backgroundColor: hex }}
                      className="h-28 rounded"
                    >
                      <div className="p-4 pt-14 text-white">
                        <div className="font-black">{hex}</div>
                        <div className="c2">
                          Pantone {pantone} &bull; CMYK {cmyk}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <BrandSection
          title="Posters and flyers"
          copy="Organising an event? We've got you covered."
          preview={(
            <div className="mb-16 flex gap-gutter">
              <div className="flex max-w-full items-start">
                <div className="relative w-[50%] shrink-0">
                  <Image
                    src={require("../public/promotional/poster_a4_en.jpg")}
                    alt=""
                    className="rounded-md"
                  />
                </div>

                <div className="px-4 text-start">
                  <p className="mb-4"><strong className="font-black">Printing instructions:</strong></p>

                  <ul className="list-disc pl-3 mb-8">
                    <li>A4 paper</li>
                    <li>CMYK color space</li>
                    <li>3mm bleed</li>
                  </ul>

                  <p className="mb-4"><strong className="font-black">Download:</strong></p>

                  <ul className="list-disc pl-3">
                    <li><a className="text-blurple-600 hover:underline" href="/promotional/poster_a4_en.pdf">English (PDF)</a></li>
                    <li><a className="text-blurple-600 hover:underline" href="/promotional/poster_a4_de.pdf">Deutsch (PDF)</a></li>
                    <li><a className="text-blurple-600 hover:underline" href="/promotional/poster_a4_es.pdf">Español (PDF)</a></li>
                    <li><a className="text-blurple-600 hover:underline" href="/promotional/poster_a4_it.pdf">Italiano (PDF)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        />

        <BrandSection
          title="Product screenshots"
          copy="Need some screenshots? Here is a selection."
          preview={
            <div className="mb-16 grid grid-cols-5 gap-gutter">
              {[
                {
                  src: screenshotComposeLight,
                  title: "Compose, light mode, Android",
                },
                {
                  src: screenshotHomeLight,
                  title: "Home, light mode, Android",
                },
                {
                  src: screenshotProfileLight,
                  title: "Profile, light mode, Android",
                },
                {
                  src: screenshotServerRulesLight,
                  title: "Server rules, light mode, Android",
                },
                {
                  src: screenshotThreadLight,
                  title: "Thread, light mode, Android",
                },
              ].map((screenshot) => (
                <a
                  key={screenshot.title}
                  href={screenshot.src.src}
                  title={screenshot.title}
                  className="block col-span-1 overflow-hidden rounded border border-gray-4 ring-blurple-500 hocus:ring"
                >
                  <Image src={screenshot.src} alt="" />
                </a>
              ))}
            </div>
          }
        />
      </div>

      <Head>
        <title>Brand Toolkit - Mastodon</title>
        <meta property="og:title" content="Brand Toolkit for Mastodon" />
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
export const getStaticProps = withDefaultStaticProps()
export default Branding
