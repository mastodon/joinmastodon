import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"
import Image from "next/legacy/image"
import { FormattedDate, FormattedMessage } from "react-intl"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import Statistic from "../components/Statistic"
import { Day } from "../types/api"
import team from "../data/team"
import interviews from "../data/interviews"
import press from "../data/press"
import LinkWithArrow from "../components/LinkWithArrow"
import PressArticle from "../components/PressArticle"

import PersonIcon from "../public/ui/person.svg?inline"
import FiltersIcon from "../public/ui/filters.svg?inline"
import LogoWhite from "../public/logos/logo-white.svg?inline"

const About = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h1 mb-8 pt-16">We develop Mastodon</h1>
        <p className="sh1">Free, open-source decentralized social media</p>
      </Hero>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <div className="grid grid-cols-12 gap-y-24 py-20 md:gap-x-12">
            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-6">Our story</h2>

              <p className="b1 mb-4">
                <strong>
                  Mastodon gGmbH is a non-profit from Germany that develops the
                  Mastodon software.
                </strong>{" "}
                Mastodon started in 2016 as an open-source project by Eugen
                Rochko, who, as an avid user since 2008, was dissatisfied with
                the state and direction of Twitter.
              </p>
              <p className="b1 mb-4">
                Believing that instant global communications were too crucial
                for modern society to belong to a single commercial company, he
                sought to build a user-friendly microblogging product that would
                not belong to any central authority, but remain practical for
                everyday use.
              </p>
              <p className="b1 mb-4">
                The first public launch occurred in October 2016. The initial
                support the project received through Patreon ensured that Eugen
                could begin working on the project full-time post-graduation. In
                April 2017 it received its first big break and garnered
                world-wide attention and press coverage.
              </p>
              <p className="b1 mb-6">
                The project was officially incorporated as a gGmbH (a German
                form of non-profit LLC) in 2021.
              </p>

              <ul className="b1 space-y-4">
                <li>
                  <LinkWithArrow href="/branding">Branding</LinkWithArrow>
                </li>
                <li>
                  <LinkWithArrow href="/trademark">
                    Trademark Policy
                  </LinkWithArrow>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-6" id="team">
                Meet the team
              </h2>

              <p className="b1 mb-6">
                <LinkWithArrow href="/careers">Join the team</LinkWithArrow>
              </p>

              <div className="grid grid-cols-12 gap-gutter">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="col-span-12 sm:col-span-6 lg:col-span-4"
                  >
                    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-blurple-gradient shadow">
                      {member.image && (
                        <Image
                          src={member.image}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          alt=""
                          className="grayscale"
                        />
                      )}
                    </div>

                    <span className="b2 block !font-bold">{member.name}</span>

                    <div className="flex items-center">
                      <span className="b2 block flex-grow !font-semibold text-gray-1">
                        {member.position}
                      </span>

                      {member.socials && (
                        <a
                          href={member.socials.mastodon}
                          rel="me"
                          className="b2 ml-2 block flex-shrink-0 text-blurple-600 hover:text-blurple-500"
                        >
                          <LogoWhite
                            className="h-[1em] w-[1em]"
                            fill="currentColor"
                          />
                        </a>
                      )}
                    </div>
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
                  <a
                    href="/reports/Mastodon Annual Report 2022.pdf"
                    className="b2 block hover:text-blurple-500"
                  >
                    <span className="h5 block">2022</span>
                    <span className="text-gray-2">PDF, 6 MB</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/reports/Mastodon Annual Report 2021.pdf"
                    className="b2 block hover:text-blurple-500"
                  >
                    <span className="h5 block">2021</span>
                    <span className="text-gray-2">PDF, 316 KB</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-4">Podcast interviews</h2>

              <div className="space-y-4">
                {interviews
                  .sort((a, b) => a.date.localeCompare(b.date) * -1)
                  .map((interview) => (
                    <a
                      key={interview.url}
                      href={interview.url}
                      rel="nofollow noopener"
                      className="group flex max-w-full items-center hover:text-blurple-500"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-blurple-500 group-hover:ring-2">
                        <Image
                          src={interview.icon}
                          alt=""
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>

                      <div className="truncate px-4">
                        <span className="b1 block truncate !font-bold">
                          {interview.title}
                        </span>
                        <span className="b2 text-gray-1">
                          <FormattedDate
                            value={interview.date}
                            year="numeric"
                            month="short"
                            day="2-digit"
                          />{" "}
                          <strong>{interview.show}</strong>
                        </span>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            <div className="col-span-12">
              <h2 className="h3 mb-4">In the press</h2>
              <p className="sh1 mb-8 text-gray-2">
                What others write about us.
              </p>

              <div className="grid grid-cols-12 gap-gutter">
                {press
                  .sort((a, b) => a.date.localeCompare(b.date) * -1)
                  .map((story) => (
                    <PressArticle key={story.url} story={story} />
                  ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h2 className="h3 mb-4">Contact us</h2>

              <div className="b1 mb-4">
                <dt className="font-bold">Press inquiries:</dt>
                <dd>
                  <a
                    href="mailto:press@joinmastodon.org"
                    className="text-blurple-500 hover:underline"
                  >
                    press@joinmastodon.org
                  </a>
                </dd>
              </div>

              <div className="b1 mb-4">
                <dt className="font-bold">Legal inquiries:</dt>
                <dd>
                  <a
                    href="mailto:legal@joinmastodon.org"
                    className="text-blurple-500 hover:underline"
                  >
                    legal@joinmastodon.org
                  </a>
                </dd>
              </div>

              <div className="b1 mb-4">
                <dt className="font-bold">Trademark inquiries:</dt>
                <dd>
                  <a
                    href="mailto:trademark@joinmastodon.org"
                    className="text-blurple-500 hover:underline"
                  >
                    trademark@joinmastodon.org
                  </a>
                </dd>
              </div>

              <div className="b1 mb-4">
                <dt className="font-bold">Security inquiries:</dt>
                <dd>
                  <a
                    href="mailto:security@joinmastodon.org"
                    className="text-blurple-500 hover:underline"
                  >
                    security@joinmastodon.org
                  </a>
                </dd>
              </div>

              <div className="b1 mb-4">
                <dt className="font-bold">Other inquiries:</dt>
                <dd>
                  <a
                    href="mailto:hello@joinmastodon.org"
                    className="text-blurple-500 hover:underline"
                  >
                    hello@joinmastodon.org
                  </a>
                </dd>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6" id="impressum">
              <h2 className="h3 mb-4">Impressum</h2>

              <dl className="b1 grid grid-cols-12 gap-gutter">
                <div className="col-span-6">
                  <div className="mb-4">
                    <dt className="font-bold">Firmenname:</dt>
                    <dd>Mastodon gGmbH</dd>
                  </div>

                  <div className="mb-4">
                    <dt className="font-bold">Anschrift:</dt>
                    <dd>
                      <address className="not-italic">
                        Mühlenstraße 8a
                        <br />
                        14167 Berlin
                        <br />
                        Germany
                      </address>
                    </dd>
                  </div>

                  <div className="mb-4">
                    <dt className="font-bold">Kontakt:</dt>
                    <dd>
                      <a
                        href="mailto:hello@joinmastodon.org"
                        className="text-blurple-500 hover:underline"
                      >
                        hello@joinmastodon.org
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="mb-4">
                    <dt className="font-bold">Handelsregister:</dt>
                    <dd>HRB 230086 B (Amtsgericht Charlottenburg)</dd>
                  </div>

                  <div className="mb-4">
                    <dt className="font-bold">USt-ID:</dt>
                    <dd>DE344258260</dd>
                  </div>
                </div>

                <div className="col-span-12 mb-4">
                  <dt className="font-bold">Vertretungsberechtigt:</dt>
                  <dd>Eugen Rochko (Geschäftsführer)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Head>
        <title>About - Mastodon</title>
        <meta property="og:title" content="The company behind Mastodon" />
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
  const days = useQuery<Day[]>(
    ["statistics"],
    () =>
      fetch("https://api.joinmastodon.org/statistics").then((res) =>
        res.json()
      ),
    { cacheTime: 30 * 60 * 1000 }
  )

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
          Icon={PersonIcon}
          label={
            <FormattedMessage
              id="stats.monthly_active_users"
              defaultMessage="Monthly Active Users"
            />
          }
          currentValue={parseInt(currentDay.active_user_count)}
          prevValue={parseInt(compareDay.active_user_count)}
        />

        <Statistic
          key="servers"
          Icon={FiltersIcon}
          label={
            <FormattedMessage id="stats.servers" defaultMessage="Servers Up" />
          }
          currentValue={parseInt(currentDay.server_count)}
          prevValue={parseInt(compareDay.server_count)}
        />
      </div>

      <p className="b3 mt-4 text-gray-2">
        <FormattedMessage
          id="stats.disclaimer"
          defaultMessage="Data collected by crawling all accessible Mastodon servers on {date}."
          values={{
            date: (
              <FormattedDate
                value={currentDay.period}
                year="numeric"
                month="short"
                day="2-digit"
              />
            ),
          }}
        />
      </p>
    </>
  )
}

export const getStaticProps = withDefaultStaticProps()

export default About
