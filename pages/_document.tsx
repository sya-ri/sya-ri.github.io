import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#9e8b7f" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="#ffffff" name="theme-color" />

          {/* Open Graph https://www.opengraph.xyz/ */}
          <meta content="https://s7a.dev/" property="og:url" />
          <meta content="website" property="og:type" />
          <meta content="sya-ri" property="og:title" />
          <meta content="Portfolio" property="og:description" />
          <meta
            content="https://s7a.dev/icon-1200x630.png"
            property="og:image"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="s7a.dev" property="twitter:domain" />
          <meta content="https://s7a.dev/" property="twitter:url" />
          <meta content="sya-ri" name="twitter:title" />
          <meta content="" name="twitter:description" />
          <meta
            content="https://s7a.dev/icon-1200x630.png"
            name="twitter:image"
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

export default Document;
