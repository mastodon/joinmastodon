import app_hero_planets from "../public/illustrations/app_hero_planets.png"
import app_hero_festival from "../public/illustrations/app_hero_festival.png"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import { FormattedMessage, useIntl } from "react-intl"
import AppHero from "../components/AppHero"
import React, { useState } from "react"
import Image from "next/legacy/image"
import Hero from "../components/Hero"
import LinkButton from "../components/LinkButton"
import { theme, safelist } from "../tailwind.config.js"
import { AppCard } from "../components/AppCard"
import Layout from "../components/Layout"

import tusky from "../public/apps/tusky.png"
import SkeletonText from "../components/SkeletonText"
import ServerCard from "../components/ServerCard"
import classNames from "classnames"
import TwoUpFeature from "../components/TwoUpFeature"

import ProgressiveWebIcon from "../public/icons/progressive-web.svg?inline"
import ApiGearIcon from "../public/icons/api-gear.svg?inline"

const GuideSection = ({
  title,
  controls,
  children,
}: {
  title: React.ReactNode
  controls?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <section className="">
      <h2 className="h5 mb-4">{title}</h2>
      {controls && (
        <div className="mb-4 flex min-h-[3rem] items-center rounded border border-gray-3 bg-gray-5 px-4">
          {controls}
        </div>
      )}
      {children}
    </section>
  )
}

/** This page does not require translations */
function Guide(props) {
  const intl = useIntl()
  const [altAppHero, setAltAppHero] = useState(false)
  const [skeletonTextSize, setSkeletonTextSize] = useState("b2")
  const [serverCardLoading, setServerCardLoading] = useState(false)

  return (
    <Layout>
      <Hero>
        <h1 className="h1 mb-4">Style Guide</h1>
        <p className="sh1">
          A reference of components and design elements, along with their usage
        </p>
      </Hero>

      <div className="mt-16 flex flex-col gap-16">
        <h2 className="h2">Styles</h2>

        <GuideSection title="Type Scale">
          {Object.keys(theme.fontSize).map((name) => (
            <div key={name} className="flex items-baseline gap-4">
              <div className="b4 flex-0 w-4">{name}</div>
              <div className={name}>Find your perfect community</div>
            </div>
          ))}
        </GuideSection>
        <GuideSection title="Colors">
          <div className="grid grid-cols-1 gap-8">
            {Object.keys(theme.colors).map((color) => (
              <div key={color}>
                <div className="flex space-x-4">
                  <div className="w-24 shrink-0">
                    <div className="flex h-10 flex-col justify-center">
                      <div className="font-semibold">{color}</div>
                    </div>
                  </div>

                  <div className="flex-0 grid min-w-0 grid-cols-6 gap-x-4 gap-y-3">
                    {(typeof theme.colors[color] === "string"
                      ? [""]
                      : Object.keys(theme.colors[color])
                    ).map((stage) => (
                      <div key={stage} className="relative flex">
                        <div className="space-y-1.5">
                          <div
                            className={`h-10 w-full rounded bg-${color}${
                              stage === "" ? "" : `-${stage}`
                            } border-2 border-solid border-[rgba(0,0,0,0.1)] bg-clip-border`}
                          />
                          <div className="px-0.5">
                            <div className="w-20 font-medium">
                              {stage || "-"}
                            </div>
                            <div className="font-mono lowercase text-gray-2">
                              {theme.colors[color][stage] ||
                                theme.colors[color]}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GuideSection>
        <GuideSection title="Icons">
          <div className="flex flex-wrap gap-gutter">
            {[
              `api-gear`,
              `api-window`,
              `award`,
              `decentralized`,
              `donate-box`,
              `donate`,
              `feed`,
              `money`,
              `move-servers`,
              `move`,
              `open-source`,
              `price-tag`,
              `privacy`,
              `progressive-web`,
              `safe`,
              `safety-1`,
              `safety`,
              `screen`,
              `servers`,
            ].map((name) => (
              <figure
                key={name}
                className="relative flex flex-col items-baseline gap-4"
              >
                <Image
                  src={require(`../public/icons/${name}.svg`)}
                  className="aspect-square"
                  width="120"
                  height="120"
                  alt=""
                />
                <figcaption className="b2">{name}</figcaption>
              </figure>
            ))}
          </div>
        </GuideSection>

        <h2 className="h2">Components</h2>

        <GuideSection title={<code>IconCard</code>}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-gutter">
            <IconCard
              title="Decentralized"
              icon="decentralized"
              copy={
                "Not controlled by a single website or company, Mastodon is a network of completely independent service providers forming a global, cohesive social media platform. "
              }
            />
          </div>
        </GuideSection>
        <GuideSection title={<code>LinkButton</code>}>
          <h4 className="h6">Sizes</h4>
          <div className="flex gap-gutter rounded bg-gray-5 p-4">
            <LinkButton href="/" size="large">
              Large
            </LinkButton>
            <LinkButton href="/" size="medium">
              Medium
            </LinkButton>
            <LinkButton href="/" size="small">
              Small
            </LinkButton>
          </div>
          <h4 className="h6">Colors</h4>
          <div className="flex gap-gutter rounded bg-gray-5 p-4">
            <LinkButton href="/" size="medium">
              Default
            </LinkButton>
            <LinkButton href="/" size="medium" light>
              Light
            </LinkButton>
            <LinkButton href="/" size="medium" light borderless>
              Light, Borderless
            </LinkButton>
          </div>
        </GuideSection>
        <GuideSection title={<code>SelectMenu</code>}>
          <SelectMenu
            label={
              <FormattedMessage id="sorting.sort_by" defaultMessage="Sort" />
            }
            value="all"
            onChange={() => {}}
            options={[
              {
                label: intl.formatMessage({
                  id: "sorting.recently_added",
                  defaultMessage: "Recently Added",
                }),
                value: "all",
              },
              {
                label: intl.formatMessage({
                  id: "sorting.free",
                  defaultMessage: "Free",
                }),
                value: "x",
              },
              {
                label: intl.formatMessage({
                  id: "sorting.alphabetical",
                  defaultMessage: "A–Z",
                }),
                value: "y",
              },
            ]}
          />
        </GuideSection>
        <GuideSection title={<code>AppCard</code>}>
          <div className="max-w-sm">
            <AppCard
              {...{
                released_on: "Mar 15, 2017",
                name: "Tusky",
                icon: tusky,
                url: "https://play.google.com/store/apps/details?id=com.keylesspalace.tusky",
                paid: false,
                category: "android",
                categoryLabel: intl.formatMessage({
                  id: "browse_apps.android",
                  defaultMessage: "Android",
                }),
              }}
            />
          </div>
        </GuideSection>
        <GuideSection
          title={<code>SkeletonText</code>}
          controls={
            <SelectMenu
              label="Size"
              value={skeletonTextSize}
              onChange={(value) => setSkeletonTextSize(value)}
              options={Object.keys(theme.fontSize).map((typeClass) => ({
                label: typeClass,
                value: typeClass,
              }))}
            />
          }
        >
          <p className={classNames(skeletonTextSize, "max-w-[20ch]")}>
            <SkeletonText className="w-[20ch]" />
            <SkeletonText className="w-[20ch]" />
            <SkeletonText className="w-[16ch]" />
          </p>
        </GuideSection>
        <GuideSection title={<code>TwoUpFeature</code>}>
          <TwoUpFeature
            features={[
              {
                Icon: ProgressiveWebIcon,
                title: (
                  <FormattedMessage
                    id="browse_apps.progressive_web_app"
                    defaultMessage="Progressive web app"
                  />
                ),
                copy: (
                  <FormattedMessage
                    id="browse_apps.you_can_use_it_from_desktop"
                    defaultMessage="You can always use Mastodon from the browser on your desktop or phone! It can be added to your home screen and some browsers even support push notifications, just like a native app!"
                  />
                ),
                cta: (
                  <FormattedMessage
                    id="browse_apps.pwa_feature.cta"
                    defaultMessage="Join a server"
                  />
                ),
                cta_link: "/servers",
              },
              {
                Icon: ApiGearIcon,
                title: (
                  <FormattedMessage
                    id="browse_apps.open_api"
                    defaultMessage="Open API"
                  />
                ),
                copy: (
                  <FormattedMessage
                    id="browse_apps.make_your_own"
                    defaultMessage="Mastodon is open-source and has an elegant, well-documented API that is available to everyone. Make your own app, or use one of the many third-party apps made by other developers!"
                  />
                ),
                cta: (
                  <FormattedMessage
                    id="browse_apps.api_docs"
                    defaultMessage="API documentation"
                  />
                ),
                cta_link: "https://docs.joinmastodon.org/client/intro/",
              },
            ]}
          />
        </GuideSection>
        <GuideSection
          title={<code>ServerCard</code>}
          controls={
            <label>
              <input
                type="checkbox"
                onChange={(e) => setServerCardLoading(e.target.checked)}
              />{" "}
              Loading
            </label>
          }
        >
          <div className="max-w-xs">
            <ServerCard
              server={
                serverCardLoading
                  ? undefined
                  : {
                      domain: "mastodon.social",
                      version: "3.5.3",
                      description:
                        "The original server maintained by the Mastodon gGmbH non-profit.",
                      languages: ["en"],
                      region: "",
                      categories: ["general"],
                      proxied_thumbnail:
                        "https://proxy.joinmastodon.org/d7d02f9615184131475feeb95ab8cd01e6575448/68747470733a2f2f66696c65732e6d6173746f646f6e2e736f6369616c2f736974655f75706c6f6164732f66696c65732f3030302f3030302f3030312f6f726967696e616c2f766c63736e61702d323031382d30382d32372d31366834336d3131733132372e706e67",
                      total_users: 805131,
                      last_week_users: 88052,
                      approval_required: false,
                      language: "en",
                      category: "general",
                    }
              }
            />
          </div>
        </GuideSection>
        <GuideSection
          title={<code>AppHero</code>}
          controls={
            <label>
              <input
                type="checkbox"
                onChange={(e) => setAltAppHero(e.target.checked)}
                checked={altAppHero}
              />
              {" Alternate AppHero"}
            </label>
          }
        >
          <div>
            {altAppHero ? (
              <AppHero backgroundImage={app_hero_planets} />
            ) : (
              <AppHero
                backgroundImage={app_hero_festival}
                backgroundImagePosition={"center left"}
              />
            )}
          </div>
        </GuideSection>
      </div>
    </Layout>
  )
}

export default Guide

export const getStaticProps = withDefaultStaticProps()
