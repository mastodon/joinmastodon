import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/image"
import { FormattedDate } from "react-intl"

import theVergeLogo from "../public/press/the-verge.svg"
import wiredLogo from "../public/press/wired.svg"
import nytLogo from "../public/press/nyt.svg"
import motherboardLogo from "../public/press/motherboard.svg"
import mashableLogo from "../public/press/mashable.svg"
import slateLogo from "../public/press/slate.svg"
import esquireLogo from "../public/press/esquire.svg"
import financialTimesLogo from "../public/press/financial-times.svg"
import gizmodoLogo from "../public/press/gizmodo.svg"
import pcMagLogo from "../public/press/pcmag.svg"
import boingBoingLogo from "../public/press/boing-boing.svg"

const About = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero homepage desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 pt-16 mb-8">We develop Mastodon</h1>
        <p className="sh1">
          Free, open-source decentralized social media
        </p>
      </Hero>

      <section>
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-6 py-20">
            <h2 className="h3 mb-4">Our story</h2>
            <p className="b1 mb-4">
              <strong>Mastodon gGmbH is a non-profit from Germany that develops the Mastodon software.</strong> Mastodon started as an open-source project by Eugen Rochko in 2016, who, as an avid user since 2008, was dissatisfied with the state and direction of Twitter.
            </p>
            <p className="b1 mb-4">
              Believing that instant global communications were too crucial for modern society to belong to a single commercial company, he saught to build a user-friendly microblogging product that would not belong to any central authority, but remain practical for everyday use.
            </p>
            <p className="b1 mb-4">
              The first public launch occurred in October 2016. The initial support the project received through Patreon ensured that Eugen could begin working on the project full-time post-graduation. In April 2017 it received its first big break and garnered world-wide attention and press coverage.
            </p>
            <p className="b1">
              The project was officially incorporated as a gGmbH (a German form of non-profit LLC) in 2021.
            </p>
          </div>

          <div className="col-span-6 col-start-7 py-20">
            <h2 className="h3 mb-4">Annual reports</h2>

            <ul className="list-disc pl-3">
              <li>
                <a href="/reports/Mastodon Annual Report 2021.pdf" className="block b2 hover:text-blurple-500">
                  <span className="block h5">2021</span>
                  <span className="text-gray-2">PDF, 316 KB</span>
                </a>
              </li>
            </ul>

            <h2 className="h3 mt-20 mb-4">Podcast interviews</h2>

            <div className="">
              {[
                {
                  url: "https://changelog.com/podcast/315",
                  title: "Join the federation?! Mastodon awaits...",
                  show: "The Changelog",
                  date: "2018-09-19",
                  icon: require("../public/press/the-changelog.png"),
                }, {
                  url: "https://podtail.com/en/podcast/griftonomics/selling-free-speech-w-eugen-rochko-of-mastodon/",
                  title: "Selling Free Speech (w/ Eugen Rochko of Mastodon)",
                  show: "Griftonomics",
                  date: "2022-05-24",
                  icon: require("../public/press/griftonomics.jpg"),
                }, {
                  url: "https://slate.com/technology/2018/08/mastodon-founder-eugen-rochko-is-building-a-nazi-free-alternative-to-twitter.html",
                  title: "Twitter Without the Nazis",
                  show: "Slate's What Next",
                  date: "2018-08-29",
                  icon: require("../public/press/slate-what-next.jpg"),
                },
              ].sort((a, b) => a.date.localeCompare(b.date) * -1).map(interview => (
                <a key={interview.url} href={interview.url} rel="nofollow noopener" className="flex items-center py-4 hover:text-blurple-500 group">
                  <div className="relative rounded-md overflow-hidden w-20 h-20 group-hover:ring-2 ring-blurple-500"><Image src={interview.icon} alt="" layout="fill" objectFit="contain" /></div>

                  <div className="px-4">
                    <span className="block b1 !font-bold truncate">{interview.title}</span>
                    <span className="b2 text-gray-1"><FormattedDate value={interview.date} year="numeric" month="short" day="2-digit" /> <strong>{interview.show}</strong></span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 py-20">
            <h2 className="h3 mb-4">In the press</h2>
            <p className="sh1 text-gray-2 mb-8">What others write about us.</p>

            <div className="grid grid-cols-12 gap-gutter">
              {[
                {
                  logo: motherboardLogo,
                  url: "https://www.vice.com/en/article/n7npd7/30000-new-users-signed-up-for-mastodon-after-elon-musk-bought-twitter",
                  title: "30,000 New Users Signed Up for Mastodon After Elon Musk Bought Twitter",
                  date: "2022-04-26",
                }, {
                  logo: mashableLogo,
                  url: "https://mashable.com/article/eugen-rochko-mastodon-interview",
                  title: "The coder who built Mastodon is 24, fiercely independent, and doesn’t care about money",
                  date: "2017-04-06",
                }, {
                  logo: esquireLogo,
                  url: "https://www.esquire.com/lifestyle/a22777589/what-is-mastodon-twitter-platform/",
                  title: "Tired of Nazis in Your Twitter Mentions? Try Mastodon.",
                  date: "2018-08-22",
                }, {
                  logo: theVergeLogo,
                  url: "https://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone",
                  title: "Mastodon.social is an open-source Twitter competitor that’s growing like crazy",
                  date: "2017-04-04",
                }, {
                  logo: slateLogo,
                  url: "https://slate.com/technology/2018/08/mastodon-what-you-need-to-know-about-the-new-social-network-competing-with-twitter.html",
                  title: "The New Social Network Dodging Government Surveillance—and Nazis",
                  date: "2018-08-30",
                }, {
                  logo: wiredLogo,
                  url: "https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/",
                  title: "Like Twitter But Hate the Trolls? Try Mastodon",
                  date: "2017-04-13",
                }, {
                  logo: nytLogo,
                  url: "https://www.nytimes.com/2019/12/18/technology/facebook-twitter-bitcoin-blockchain.html",
                  title: "Twitter and Facebook Want to Shift Power to Users. Or Do They?",
                  date: "2019-12-18",
                }, {
                  logo: financialTimesLogo,
                  url: "https://www.ft.com/content/d3be2f7a-3705-4bee-9e50-d81b9f31ee1b",
                  title: "Is it time to leave Twitter for Mastodon?",
                  date: "2022-05-16",
                }, {
                  logo: gizmodoLogo,
                  url: "https://www.gizmodo.com.au/2022/04/europe-starts-its-own-social-networks/",
                  title: "Europe Starts Its Own Social Networks",
                  date: "2022-04-30",
                }, {
                  logo: pcMagLogo,
                  url: "https://www.pcmag.com/news/after-musk-acquires-twitter-mastodon-sees-flood-of-traffic-server-slowdown",
                  title: "After Musk Acquires Twitter, Mastodon Sees Flood of Traffic, Server Slowdown",
                  date: "2022-04-25",
                }, {
                  logo: boingBoingLogo,
                  url: "https://boingboing.net/2018/07/18/platform-independence.html",
                  title: "Facebook Domination vs. Self-Determination",
                  date: "2018-07-18",
                },
              ].sort((a, b) => a.date.localeCompare(b.date) * -1).map(story => (
                <a key={story.url} href={story.url} rel="nofollow noopener" className="block col-span-3 rounded-md bg-gray-4 hocus:ring ring-blurple-500">
                  <div className="flex items-center justify-center w-full py-20 px-16">
                    <div className="relative w-full h-10">
                      <Image src={story.logo} alt="" layout="fill" objectFit="contain" />
                    </div>
                  </div>

                  <div className="block p-8 h6 !font-medium">{story.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Head>
        <title>About - Mastodon</title>
        <meta
          property="og:title"
          content="The company behind Mastodon"
        />
        <meta
          property="og:description"
          content="Our story, mission, annual reports, interviews, press releases and more."
        />
        <meta
          property="description"
          content="Our story, mission, annual reports, interviews, press releases and more."
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

export default About
