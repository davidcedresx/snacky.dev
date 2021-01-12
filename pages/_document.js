import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
          <Head>
              <script async defer data-domain="snacky.dev" src="https://plausible.io/js/plausible.js"></script>
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>

          <Footer />
      </Html>
    )
  }
}

export default MyDocument
