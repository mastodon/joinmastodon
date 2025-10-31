import Head from "next/head"
import { FormattedMessage, useIntl } from "react-intl"
import { InferGetStaticPropsType } from "next"
import Markdown from "react-markdown"

import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { RoadmapStatus } from "../components/RoadmapStatus"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { loadRoadmap } from "../utils/roadmap"

const Roadmap = ({
  features,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const intl = useIntl()

  return (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero homepage safeTextShadow={false} noHeight>
          <div className="grid gap-x-gutter gap-y-16 lg:grid-cols-12">
            <div className="full-width-bg__inner lg:col-span-5 lg:text-end">
              <h1 className="h1 mb-8 lg:pt-16">
                <FormattedMessage id="roadmap.title" defaultMessage="Roadmap" />
              </h1>
              <p className="sh1 lg:mb-11 text-balance">
                <FormattedMessage
                  id="roadmap.lead"
                  defaultMessage="Here's a glimpse of what we're working on"
                />
              </p>
            </div>

            <div className="max-w-[100vw] text-start lg:col-span-7 grid grid-cols-1 md:grid-cols-[min-content,auto] gap-4">
              {features.map(({ data, content }, index) => (
                <section
                  key={index}
                  className="px-3 py-5 bg-white rounded-xl text-black grid grid-cols-subgrid gap-y-2 md:col-span-2 border border-gray-3"
                >
                  <div className="mt-1">
                    <RoadmapStatus status={data.status} />
                  </div>
                  <h2 className="font-bold text-b1 col-start-2">
                    {data.title}
                  </h2>
                  <div className="col-start-2 flex flex-col gap-1">
                    <Markdown allowedElements={allowedElements}>
                      {content}
                    </Markdown>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Hero>

        <Head>
          <title>
            {`${intl.formatMessage({
              id: "roadmap.page_title",
              defaultMessage: "Public Roadmap",
            })} - Mastodon`}
          </title>

          <meta
            property="og:title"
            content={intl.formatMessage({
              id: "roadmap.page_title",
              defaultMessage: "Public Roadmap",
            })}
          />
          <meta
            name="description"
            content={intl.formatMessage({
              id: "roadmap.page_description",
              defaultMessage: "Learn what we are working on in Mastodon",
            })}
          />
          <meta
            name="og:description"
            content={intl.formatMessage({
              id: "roadmap.page_description",
              defaultMessage: "Learn what we are working on in Mastodon",
            })}
          />
        </Head>
      </div>
    </Layout>
  )
}

const allowedElements: ReadonlyArray<string> = [
  "p",
  "strong",
  "em",
  "a",
  "ul",
  "ol",
  "li",
]

export const getStaticProps = withDefaultStaticProps(async () => {
  const features = await loadRoadmap()
  return {
    props: { features },
  }
})

export default Roadmap
