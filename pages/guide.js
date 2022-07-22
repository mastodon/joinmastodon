import SVG from "react-inlinesvg"
import loadIntlMessages from "../utils/loadIntlMessages"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import { FormattedMessage, useIntl } from "react-intl"

function Home(props) {
  const intl = useIntl()
  return (
    <div className="flex flex-col gap-16 [padding-block:4rem]">
      <section>
        <h2 className="h5">Type Scale</h2>

        {[
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "sh1",
          "b1",
          "b2",
          "b3",
          "b4",
          "c2",
          "c3",
        ].map((name) => (
          <div key={name} className="flex items-baseline gap-4">
            <div className="b4 flex-0 w-4">{name}</div>
            <div className={name}>Find your perfect community</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="h5">Colors</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {[
            "bg-black",
            "bg-gray-1",
            "bg-gray-2",
            "bg-gray-3",
            "bg-gray-4",
            "bg-gray-5",
            "bg-white",
            "bg-blurple-gradient",
            "bg-eggplant",
            "bg-dark-blurple",
            "bg-main-blurple",
            "bg-accent-blurple",
            "bg-blurple-text-on-black",
            "bg-lime",
            "bg-goldenrod",
          ].map((color) => (
            <div key={color} className="flex items-center gap-4">
              <div className={`h-12 w-12 ${color}`} />
              <div className="b2">{color.replace("bg-", "")}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h5">Icons</h2>

        <div className="flex flex-wrap">
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
          <h3 className="h6">IconCard</h3>
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
        <div>
          <h3 className="h6">IconCard</h3>
          <div>
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
        </div>
      </section>
    </div>
  )
}

export default Home

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
