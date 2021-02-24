import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { version } from "../package.json";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render = () => (
    <Html lang="en">
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Test." />
        <meta name="description" content="Test." />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo_192x192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/ITLogo_192x192.png"
        />
        <link
          rel="preload"
          href="/fonts/Karla-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Karla-BoldItalic.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Karla-Italic.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Karla-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="build version" content={version} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
