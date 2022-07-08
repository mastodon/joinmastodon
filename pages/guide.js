import SVG from "react-inlinesvg"
import loadIntlMessages from "../utils/loadIntlMessages"
import { IconCard } from "../components/IconCard"

function Home(props) {
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
          <div
            key={name}
            className="flex gap-4 items-baseline"
          >
            <div className="b4 w-4 flex-0">
              {name}
            </div>
            <div className={name}>Find your perfect community</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="h5">Colors</h2>

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
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
            <div
              key={color}
              className="flex gap-4 items-center"
            >
              <div
                className={`w-12 h-12 ${color}`}
              />
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
              className="flex gap-4 flex-col items-baseline"
            >
              <SVG src={`/icons/${name}.svg`} />
              <figcaption className="b2">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section>
        <h2 className="h5">Components</h2>

        <h3 className="h6">IconCard</h3>
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >

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
                icon={"privacy"}
                copy={
                  "No surprises. Your feed is curated and created by you. We will never serve ads or push profiles for you to see. That means your data is yours and yours alone."
                }
              />
              <IconCard
                title="Privacy-Minded"
                icon="safety"
                copy={
                  "You’re in control. Publish only what you choose."
                }
              />
        </div>
      </section>
      <style jsx>{`
        section {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Home

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
