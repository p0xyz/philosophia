import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" href="/icon-192x192.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Montserrat&family=League+Spartan:wght@300;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
