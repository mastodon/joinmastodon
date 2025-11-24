import Document, { Html, Head, Main, NextScript } from "next/document"
import { getDirForLocale } from "../utils/locales"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const dir = getDirForLocale(this.props?.locale)
    return (
      <Html dir={dir}>
        <Head>
          <meta name="apple-itunes-app" content="app-id=1571998974" />
          <meta name="twitter:site" content="@joinmastodon" />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
          <script data-mode="hash" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
          <script async src="https://scripts.simpleanalyticscdn.com/auto-events.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
