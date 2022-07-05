import { FormattedMessage } from "react-intl"
import loadIntlMessages from "../utils/loadIntlMessages"

function Home() {
  return (
    <div>
      <h1>
        <FormattedMessage
          id="home.headline"
          defaultMessage="Social networking that's not for sale."
        />
      </h1>
    </div>
  )
}

export default Home

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
