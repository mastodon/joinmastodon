import Head from "next/head"
import Image from "next/legacy/image"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { IconCard } from "../components/IconCard"
import LinkButton from "../components/LinkButton"
import { useIntl, FormattedMessage } from "react-intl"
import verified from "../data/verified"

import illoProfile from "../public/illustrations/verification_profile.png"
import illoEdit from "../public/illustrations/verification_edit.png"

const Account = ({ name, username, url, image }) => (
  <a
    href={url}
    rel="noopener"
    className="group flex rounded-lg bg-white p-8 text-gray-0 hover:text-blurple-500"
  >
    <div className="relative h-14 w-14 flex-shrink-0 rounded-[50%]">
      {image && (
        <Image src={image} alt="" layout="fill" className="rounded-[50%] " />
      )}
    </div>

    <div className="truncate px-4">
      <span className="b1 block truncate !font-bold">{name}</span>
      <span className="b2 !font-semibold text-blurple-600 group-hover:text-blurple-500">
        @{username}
      </span>
    </div>
  </a>
)

const Verification = () => {
  const intl = useIntl()

  return (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero homepage>
          <div className="b2 mb-4 pt-8 !font-bold uppercase text-nightshade-100">
            <FormattedMessage
              id="verification.feature_highlight"
              defaultMessage="Feature Highlight"
            />
          </div>

          <h1 className="h1 mb-4">
            <FormattedMessage
              id="verification.title"
              defaultMessage="Verification on Mastodon"
            />
          </h1>

          <p className="sh1 mb-11 max-w-[40ch]">
            <FormattedMessage
              id="verification.lead"
              defaultMessage="Verifying your identity on Mastodon is for everyone. Based on open web standards, now and forever free."
            />
          </p>

          <div className="flex justify-center gap-12">
            <LinkButton size="large" href="/apps">
              <FormattedMessage
                id="home.get_the_app"
                defaultMessage="Get the app"
              />
            </LinkButton>

            <LinkButton size="large" href="/servers" light borderless>
              <FormattedMessage
                id="home.create_account"
                defaultMessage="Create account"
              />
            </LinkButton>
          </div>
        </Hero>

        <div className="full-width-bg">
          <div className="full-width-bg__inner">
            <section className="grid grid-cols-12 gap-gutter pb-20">
              <div className="col-span-12 grid gap-gutter md:grid-cols-3 xl:col-span-10 xl:col-start-2">
                <IconCard
                  title={
                    <FormattedMessage
                      id="verification.why.privacy.title"
                      defaultMessage="Privacy-friendly"
                    />
                  }
                  icon="privacy"
                  copy={
                    <FormattedMessage
                      id="verification.why.privacy.body"
                      defaultMessage="You do not need to submit your documents anywhere, so there is no chance of them being leaked."
                    />
                  }
                />

                <IconCard
                  title={
                    <FormattedMessage
                      id="verification.why.equality.title"
                      defaultMessage="For everyone"
                    />
                  }
                  icon="safe"
                  copy={
                    <FormattedMessage
                      id="verification.why.equality.body"
                      defaultMessage="You do not have to be a celebrity to verify your identity. You just need to have a website or web page."
                    />
                  }
                />

                <IconCard
                  title={
                    <FormattedMessage
                      id="verification.why.decentralization.title"
                      defaultMessage="Decentralized"
                    />
                  }
                  icon="decentralized"
                  copy={
                    <FormattedMessage
                      id="verification.why.decentralization.body"
                      defaultMessage="There is no need to trust a central authority. The verification can be manually confirmed anytime."
                    />
                  }
                />
              </div>
            </section>
          </div>
        </div>

        <div className="full-width-bg bg-gray-5">
          <div className="full-width-bg__inner">
            <section className="pt-14 pb-[4.5rem] md:grid md:grid-cols-2 md:items-center md:gap-gutter xl:grid-cols-12">
              <div className="order-2 row-span-full xl:col-span-5 xl:col-start-8">
                <Image src={illoProfile} alt="" />
              </div>

              <div className="row-span-full xl:col-span-5 xl:col-start-2">
                <h2 className="h4 md:h3 mb-2 md:mb-5">
                  <FormattedMessage
                    id="verification.features.no_badge.title"
                    defaultMessage="There is no blue badge"
                  />
                </h2>
                <p className="sh1 mb-8 text-gray-1">
                  <FormattedMessage
                    id="verification.features.no_badge.body"
                    defaultMessage={`Identity is not a yes or no question. There are few truly unique names in the world, so why should only the famous ones get a "yes"? At Mastodon, we don't rely on legal names and blue badges. Instead, we rely on the fact that people can be identified by their official websites.`}
                  />
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="full-width-bg">
          <div className="full-width-bg__inner">
            <section className="pt-14 pb-[4.5rem] md:grid md:grid-cols-2 md:items-center md:gap-gutter xl:grid-cols-12">
              <div className="row-span-full xl:col-span-5 xl:col-start-2">
                <Image src={illoEdit} alt="" />
              </div>

              <div className="row-span-full xl:col-span-5 xl:col-start-8">
                <h2 className="h4 md:h3 mb-2 md:mb-5">
                  <FormattedMessage
                    id="verification.features.how_to.title"
                    defaultMessage="Here's how"
                  />
                </h2>
                <p className="sh1 mb-8 text-gray-1">
                  <FormattedMessage
                    id="verification.features.how_to.body"
                    defaultMessage={`Put a link to your Mastodon profile on your website or webpage. The important part is that the link has to have a <code>rel="me"</code> attribute on it. Then edit your Mastodon profile and put the address of your website or web page in one of your four profile fields. Save your profile, that's it!`}
                    values={{
                      code: (text) => (
                        <code className="font-mono font-medium text-blurple-600">
                          {text}
                        </code>
                      ),
                    }}
                  />
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="full-width-bg -mb-footer-offset bg-gray-5 pb-footer-offset">
          <div className="full-width-bg__inner">
            <section className="grid grid-cols-12 gap-gutter py-20">
              <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                <h3 className="h3 pb-6 text-center">
                  <FormattedMessage
                    id="verification.examples.title"
                    defaultMessage="In the wild"
                  />
                </h3>

                <p className="b1 mb-16 text-center ">
                  <FormattedMessage
                    id="verification.examples.lead"
                    defaultMessage="Anyone can use verification on Mastodon, but here are just some of the most recognizable names that do…"
                  />
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-1">
                  {verified.map(({ url, ...other }) => (
                    <Account key={url} url={url} {...other} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Head>
        <title>
          {`${intl.formatMessage({
            id: "verification.page_title",
            defaultMessage: "Verification",
          })} - Mastodon`}
        </title>

        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "verification.page_title",
            defaultMessage: "Verification",
          })}
        />

        <meta
          name="description"
          content={intl.formatMessage({
            id: "verification.page_description",
            defaultMessage: "Learn how to get verified on Mastodon",
          })}
        />

        <meta
          name="og:description"
          content={intl.formatMessage({
            id: "verification.page_description",
            defaultMessage: "Learn how to get verified on Mastodon",
          })}
        />
      </Head>
    </Layout>
  )
}

export default Verification

export const getStaticProps = withDefaultStaticProps()
