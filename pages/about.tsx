import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import classNames from "classnames"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/image"
import { FormattedDate, FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import Statistic from "../components/Statistic"
import { Day } from "../types/api"
import team from "../data/team"
import interviews from "../data/interviews"
import press from "../data/press"

const About = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero homepage desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 pt-16 mb-8">We develop Mastodon</h1>
        <p className="sh1">
          Free, open-source decentralized social media
        </p>
      </Hero>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <div className="grid grid-cols-12 md:gap-x-12 gap-y-24 py-20">
            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-6">Our story</h2>

              <p className="b1 mb-4">
                <strong>Mastodon gGmbH is a non-profit from Germany that develops the Mastodon software.</strong> Mastodon started as an open-source project by Eugen Rochko in 2016, who, as an avid user since 2008, was dissatisfied with the state and direction of Twitter.
              </p>
              <p className="b1 mb-4">
                Believing that instant global communications were too crucial for modern society to belong to a single commercial company, he sought to build a user-friendly microblogging product that would not belong to any central authority, but remain practical for everyday use.
              </p>
              <p className="b1 mb-4">
                The first public launch occurred in October 2016. The initial support the project received through Patreon ensured that Eugen could begin working on the project full-time post-graduation. In April 2017 it received its first big break and garnered world-wide attention and press coverage.
              </p>
              <p className="b1">
                The project was officially incorporated as a gGmbH (a German form of non-profit LLC) in 2021.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-6">Meet the team</h2>

              <div className="grid grid-cols-12 gap-gutter">
                {team.map(member => (
                  <div key={member.name} className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="w-full rounded-lg bg-blurple-gradient aspect-video shadow mb-4" />

                    <span className="block b2 !font-bold">{member.name}</span>
                    <span className="block b2 !font-semibold text-blurple-600">{member.position}</span>

                    {member.socials && <div className="flex mt-2">
                      <a href={member.socials.mastodon} className="b2 block text-gray-2 hover:text-blurple-500">
                        <SVG src="/logos/logo-white.svg" className="w-4 h-4" fill="currentColor" />
                      </a>
                    </div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <h2 className="h3 mb-4">Our metrics</h2>

              <Metrics />
            </div>

            <div className="col-span-12 md:col-span-3">
              <h2 className="h3 mb-4">Reports</h2>

              <ul className="list-disc pl-3">
                <li>
                  <a href="/reports/Mastodon Annual Report 2021.pdf" className="block b2 hover:text-blurple-500">
                    <span className="block h5">2021</span>
                    <span className="text-gray-2">PDF, 316 KB</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-4">Podcast interviews</h2>

              <div className="space-y-4">
                {interviews.sort((a, b) => a.date.localeCompare(b.date) * -1).map(interview => (
                  <a key={interview.url} href={interview.url} rel="nofollow noopener" className="flex items-center hover:text-blurple-500 group max-w-full">
                    <div className="relative shrink-0 rounded-md overflow-hidden w-20 h-20 group-hover:ring-2 ring-blurple-500"><Image src={interview.icon} alt="" layout="fill" objectFit="contain" /></div>

                    <div className="px-4 truncate">
                      <span className="block b1 !font-bold truncate">{interview.title}</span>
                      <span className="b2 text-gray-1"><FormattedDate value={interview.date} year="numeric" month="short" day="2-digit" /> <strong>{interview.show}</strong></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-12">
              <h2 className="h3 mb-4">In the press</h2>
              <p className="sh1 text-gray-2 mb-8">What others write about us.</p>

              <div className="grid grid-cols-12 gap-gutter">
                {press.sort((a, b) => a.date.localeCompare(b.date) * -1).map(story => (
                  <a key={story.url} href={story.url} rel="nofollow noopener" className="block col-span-12 md:col-span-6 lg:col-span-3 rounded-md bg-gray-4 hocus:ring ring-blurple-500">
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

            <div className="col-span-12">
              <h2 className="h3 mb-4">Contact us</h2>
              <p className="sh1">For press inquiries, use <a href="mailto:press@joinmastodon.org" className="text-blurple-500 hover:underline">press@joinmastodon.org</a>. For all other inquiries, e-mail us at <a href="mailto:hello@joinmastodon.org" className="text-blurple-500 hover:underline">hello@joinmastodon.org</a>.</p>
            </div>
          </div>
        </div>
      </div>

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

const Metrics = () => {
  const days = useQuery<Day[]>(["statistics"], () => fetch("https://api.joinmastodon.org/statistics").then(res => res.json()), { cacheTime: 30 * 60 * 1000 })

  if (days.isError || days.isLoading) {
    return null
  }

  const currentDay = days.data[days.data.length - 2]
  const compareDay = days.data[0]

  return (
    <>
      <div className="space-y-4">
        <Statistic
          key="mau"
          icon="/ui/person.svg"
          label={<FormattedMessage id="stats.monthly_active_users" defaultMessage="Monthly Active Users" />}
          currentValue={parseInt(currentDay.active_user_count)}
          prevValue={parseInt(compareDay.active_user_count)}
        />

        <Statistic
          key="servers"
          icon="/ui/filters.svg"
          label={<FormattedMessage id="stats.servers" defaultMessage="Servers Up" />}
          currentValue={parseInt(currentDay.server_count)}
          prevValue={parseInt(compareDay.server_count)}
        />
      </div>

      <p className="b3 mt-4 text-gray-2"><FormattedMessage id="stats.disclaimer" defaultMessage="Data collected by crawling all accessible Mastodon servers on {date}." values={{ date: <FormattedDate value={currentDay.period} year="numeric" month="short" day="2-digit" /> }} /></p>
    </>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}

export default About
