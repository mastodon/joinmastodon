import { useQuery, useQueryClient } from "@tanstack/react-query"
import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"
import Link from "next/link"
import Arrow from "../public/ui/arrow-right.svg?inline"
import type { JobsResponse } from "../types/api"
import { fetchEndpoint } from "../utils/api"
import SkeletonText from "../components/SkeletonText"

/** This page does not require translations */
const Careers = () => {
  const queryOptions = {
    cacheTime: 10 * 60 * 1000, // 30 minutes
  }

  const jobsResponse = useQuery<JobsResponse>(
    ["jobs"],
    () => fetchEndpoint("jobs"),
    queryOptions
  )

  return (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero homepage>
          <div className="pt-6 b2 !font-bold uppercase text-nightshade-100">Careers</div>

          <h1 className="h1 mb-4">Join our team</h1>

          <p className="sh1 mb-11 max-w-[50ch]">We&apos;re building open source, decentralized social media that gives people back control over their data and their reach.</p>

          <div className="flex justify-center">
            <LinkButton size="large" href="#open-positions">
              See open positions
            </LinkButton>
          </div>
        </Hero>

        <BasicPage>
          <h2 id="open-positions" className="h3 mb-6">Open positions</h2>

          <JobBoard jobs={jobsResponse} />
        </BasicPage>

        <Head>
          <title>Careers - Mastodon</title>
          <meta
            property="og:title"
            content="Careers at Mastodon"
          />
          <meta
            property="og:description"
            content="Join our team."
          />
          <meta
            property="description"
            content="Join our team."
          />
        </Head>
      </div>
    </Layout>
  )
}

const Job = ({ job }) => (
  <li className="border-b last:border-0 border-gray-3 flex py-4">
    <div className="flex-1 b1 !font-semibold">
      {job ? job.title : <SkeletonText className="w-[20ch]" />}
    </div>

    <div className="flex-shrink-0 b2">
      {job ? <Link href={job.externalLink}>
        <a className="font-semibold text-blurple-600 hocus:underline flex items-center gap-2">
          {job.locationName}
          <Arrow className="h-[1em]" />
        </a>
      </Link> : <SkeletonText className="w-[14ch]" />}
    </div>
  </li>
)

const JobBoard = ({ jobs }) => {
  if (jobs.data?.results?.length === 0) {
    return (
      <div className="b2 flex justify-center rounded bg-gray-5 p-4 text-gray-1 md:p-8 md:py-20">
        <p className="max-w-[48ch] text-center">No positions available right now.</p>
      </div>
    )
  }

  return (
    <ul>
      {jobs.isLoading ? Array(4).fill(null).map((_, i) => (
        <Job key={i} />)
      ) : jobs.data.results.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}

export default Careers
