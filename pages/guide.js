import SVG from "react-inlinesvg"
import loadIntlMessages from "../utils/loadIntlMessages"

function Home(props) {
  return (
    <div>
      <section>
        <h2 className="h5">Type Scale</h2>

        {[
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "sh1",
          "b1",
          "b2",
          "b3",
          "b4",
          "c2",
          "c3",
        ].map(name => (
          <div key={name} style={{
            display: "flex",
            gap: "1rem",
            alignItems: "baseline",
          }}>
            <div className="b4"  style={{width: "1rem"}}>{name}</div>
            <div className={name}>Find your perfect community</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="h5">Icons</h2>

        <div style={{display: "flex", flexWrap: "wrap"}}>
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
            <figure key={name} style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              alignItems: "baseline",
            }}>
              <SVG src={`/icons/${name}.svg`} />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
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
