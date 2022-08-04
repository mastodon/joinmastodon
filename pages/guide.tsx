import app_hero_planets from "../public/illustrations/app_hero_planets.png"
import app_hero_festival from "../public/illustrations/app_hero_festival.png"
import SVG from "react-inlinesvg"
import loadIntlMessages from "../utils/loadIntlMessages"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import { FormattedMessage, useIntl } from "react-intl"
import AppHero from "../components/AppHero"
import { useState } from "react"
import Hero from "../components/Hero"
import LinkButton from "../components/LinkButton"
import { theme } from "../tailwind.config.js"

/** This page does not require translations */
function Guide(props) {
  const intl = useIntl()
  const [altAppHero, setAltAppHero] = useState(false)
  return (
    <>
      <Hero>
        <h1 className="h1 mb-4">Style Guide</h1>
        <p className="sh1">
          A reference of components and design elements, along with their usage
        </p>
      </Hero>
      <div className="mt-16 flex flex-col gap-16">
        <section>
          <h2 className="h5">Type Scale</h2>

          {Object.keys(theme.fontSize).map((name) => (
            <div key={name} className="flex items-baseline gap-4">
              <div className="b4 flex-0 w-4">{name}</div>
              <div className={name}>Find your perfect community</div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="h5">Colors</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {Object.keys(theme.colors).map((color) => (
              <div key={color} className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 flex-shrink-0 rounded bg-${color} border-2 border-solid border-[rgba(0,0,0,0.1)] bg-clip-border`}
                />
                <div className="b2">{color.replace("bg-", "")}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="h5">Icons</h2>

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
              <figure key={name} className="flex flex-col items-baseline gap-4">
                <SVG src={`/icons/${name}.svg`} />
                <figcaption className="b2">{name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <h2 className="h5">Components</h2>

          <div>
            <h3 className="h5">IconCard</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-gutter">
              <IconCard
                title="Decentralized"
                icon="decentralized"
                copy={
                  "Not controlled by a single website or company, Mastodon is a network of completely independent service providers forming a global, cohesive social media platform. "
                }
              />
              <IconCard
                title="Open Source"
                icon="open-source"
                copy={
                  "Mastodon is free and open-source software. We believe in your right to use, copy, study and change Mastodon as you see fit. Community collaboration helps us continually evolve Mastodon."
                }
              />
              <IconCard
                title="Not for Sale"
                icon="privacy"
                copy={
                  "No surprises. Your feed is curated and created by you. We will never serve ads or push profiles for you to see. That means your data is yours and yours alone."
                }
              />
              <IconCard
                title="Privacy-Minded"
                icon="safety"
                copy={"You’re in control. Publish only what you choose."}
              />
            </div>
          </div>
          <section>
            <h3 className="h5">LinkButton</h3>
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
          </section>
          <div>
            <h3 className="h5">SelectMenu</h3>
            <div>
              <SelectMenu
                label={
                  <FormattedMessage
                    id="sorting.sort_by"
                    defaultMessage="Sort"
                  />
                }
                value="all"
                onChange={() => {}}
                options={[
                  {
                    label: intl.formatMessage({
                      id: "sorting.recently_added",
                      defaultMessage: "Recently added",
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
            </div>
            <div>
              <h3 className="h5">AppHero</h3>
              <div>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setAltAppHero(e.target.checked)}
                    checked={altAppHero}
                  />
                  {" Alternate AppHero"}
                </label>
                {altAppHero ? (
                  <AppHero backgroundImage={app_hero_planets} />
                ) : (
                  <AppHero
                    backgroundImage={app_hero_festival}
                    backgroundImagePosition={"center left"}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Guide

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
