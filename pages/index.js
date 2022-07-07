import { FormattedMessage } from "react-intl"
import loadIntlMessages from "../utils/loadIntlMessages"

function Home() {
  return (
    <div className="grid">
      <h1 className="col-center-10 text-center h1">
        <FormattedMessage
          id="home.hero.headline"
          defaultMessage="Social networking that's not for sale."
        />
      </h1>

      <div className="grid">
        <h2>This is an inner grid</h2>
        <div class="col-span-4">Spanning 4 columns</div>
        <div class="col-span-4">Spanning 4 columns</div>
        <div class="col-span-4">Spanning 4 columns</div>

        <div className="grid">
          <h2>This is an inner inner grid</h2>
          <div class="col-span-3">Spanning 3 columns</div>
          <div class="col-span-3">Spanning 3 columns</div>
          <div class="col-span-3">Spanning 3 columns</div>
          <div class="col-span-3">Spanning 3 columns</div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
