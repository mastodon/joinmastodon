import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import Layout from "../components/Layout"
import data from "../data/roadmap"
import IssueTimeline from "../components/IssueTimeline"
import LinkButton from "../components/LinkButton"
import { FormattedMessage, useIntl } from "react-intl"

const Roadmap = () => {
  const intl = useIntl()

  return (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero homepage safeTextShadow={false} noHeight>
          <div className="grid gap-x-gutter gap-y-16 lg:grid-cols-12">
            <div className="full-width-bg__inner lg:col-span-5 lg:text-end">
              <h1 className="h1 mb-8 pt-16">
                <FormattedMessage id="roadmap.title" defaultMessage="Roadmap" />
              </h1>
              <p className="sh1 mb-11">
                <FormattedMessage
                  id="roadmap.lead"
                  defaultMessage="This is a glimpse into what we're working on and what we're planning to work on."
                />
              </p>

              <div className="flex justify-center lg:justify-end">
                <LinkButton
                  size="large"
                  href="https://github.com/mastodon/mastodon/issues"
                >
                  <FormattedMessage
                    id="roadmap.suggest_a_feature"
                    defaultMessage="Suggest a feature"
                  />
                </LinkButton>
              </div>
            </div>

            <div className="max-w-[100vw] text-start lg:col-span-7">
              <IssueTimeline roadmap={data} />
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

export const getStaticProps = withDefaultStaticProps()

export default Roadmap
