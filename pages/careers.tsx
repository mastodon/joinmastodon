import { useQuery, useQueryClient } from "@tanstack/react-query"
import Head from "next/head"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"
import Link from "next/link"
import { groupBy as _groupBy } from "lodash"
import Arrow from "../public/ui/arrow-right.svg?inline"
import type { JobsResponse, Job } from "../types/api"
import { fetchEndpoint } from "../utils/api"
import SkeletonText from "../components/SkeletonText"
import LinkWithArrow from "../components/LinkWithArrow"
import PressArticle from "../components/PressArticle"
import press from "../data/press"

/** This page does not require translations */
const Careers = () => {
  const jobsResponse = useQuery<JobsResponse>(
    ["jobs"],
    () => fetchEndpoint("jobs"),
    {
      cacheTime: 10 * 60 * 1000, // 10 minutes

      select: (data) => {
        return _groupBy(data.results, "departmentName")
      },
    }
  )

  return (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero homepage>
          <div className="b2 pt-6 !font-bold uppercase text-nightshade-100">
            Careers
          </div>

          <h1 className="h1 mb-4">Join our team</h1>

          <p className="sh1 mb-11 max-w-[50ch]">
            We&apos;re building open source, decentralized social media that
            gives people back control over their data and their reach.
          </p>

          <div className="flex justify-center">
            <LinkButton size="large" href="#open-positions">
              See open positions
            </LinkButton>
          </div>
        </Hero>

        <div className="full-width-bg">
          <div className="full-width-bg__inner">
            <div className="grid grid-cols-12 gap-y-24 py-20 md:gap-x-12">
              <div className="col-span-12 md:col-span-4">
                <h2 className="h3 mb-4">Work with us</h2>
                <p className="b1 mb-4">
                  Mastodon is German non-profit with a remote-only, primarily
                  English-speaking team distributed across the world.
                </p>
                <p className="b1 mb-6">
                  <LinkWithArrow href="/about#team">
                    Meet the team
                  </LinkWithArrow>
                </p>

                <ul className="b1 list-disc space-y-2">
                  <li>
                    Be part of a small team working on the generational
                    opportunity of the future of social media.
                  </li>
                  <li>
                    We can offer work contracts through a payroll provider such
                    as Remote.com or directly if you&apos;re based in Germany.
                  </li>
                </ul>
              </div>

              <div className="col-span-12 md:col-span-8">
                <h2 id="open-positions" className="h3 mb-6">
                  Open positions
                </h2>

                <JobBoard jobs={jobsResponse} />
              </div>

              <div className="col-span-12">
                <h2 className="h3 mb-4">In the news</h2>
                <p className="b1 mb-8">
                  <LinkWithArrow href="/about#press">Read more</LinkWithArrow>
                </p>

                <div className="grid grid-cols-12 gap-gutter">
                  {press
                    .sort((a, b) => a.date.localeCompare(b.date) * -1)
                    .slice(0, 4)
                    .map((story) => (
                      <PressArticle key={story.url} story={story} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Head>
          <title>Careers - Mastodon</title>
          <meta property="og:title" content="Careers at Mastodon" />
          <meta property="og:description" content="Join our team." />
          <meta property="description" content="Join our team." />
        </Head>
      </div>
    </Layout>
  )
}

const Job = ({ job }: { job?: Job }) => (
  <li className="flex border-b border-gray-4 py-4 last:border-0">
    <div className="b1 flex-1 !font-bold">
      {job ? job.title : <SkeletonText className="w-[14ch]" />}
    </div>

    <div className="b2 flex-shrink-0">
      {job ? (
        <Link
          href={job.externalLink}
          className="flex items-center gap-2 font-semibold text-blurple-600 hocus:underline"
        >
          {job.locationName}
          <Arrow className="h-[1em]" />
        </Link>
      ) : (
        <SkeletonText className="w-[7ch]" />
      )}
    </div>
  </li>
)

const JobBoard = ({ jobs }) => {
  if (jobs.error) {
    return (
      <div className="b2 flex justify-center rounded bg-gray-5 p-4 text-gray-1 md:p-8 md:py-20">
        <p className="max-w-[48ch] text-center">
          Failed to retrieve positions, please try again later.
        </p>
      </div>
    )
  } else if (jobs.data?.length === 0) {
    return (
      <div className="b2 flex justify-center rounded bg-gray-5 p-4 text-gray-1 md:p-8 md:py-20">
        <p className="max-w-[48ch] text-center">
          No positions available right now.
        </p>
      </div>
    )
  }

  return (
    <div>
      {jobs.isLoading
        ? Array(4)
            .fill(null)
            .map((_, i) => <Job key={i} />)
        : Object.keys(jobs.data).map((departmentName) => (
            <div
              key={departmentName}
              className="mb-6 border-b border-gray-4 pb-6 last:border-0"
            >
              <h3 className="b2 text-nightshade-300">{departmentName}</h3>

              {jobs.data[departmentName].map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
          ))}
    </div>
  )
}

export const getStaticProps = withDefaultStaticProps()

export default Careers
