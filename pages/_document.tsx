import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/img/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap'
            rel='preload'
            as='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,100;1,300&display=swap'
            rel='preload'
            as='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src='https://fareharbor.com/embeds/api/v1/?autolightframe=yes'
            strategy='beforeInteractive'
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument