import Head from "next/head";
import Navbar from "../components/NavBar";
import GlobalStylesheet from "../styles/globalStylesheet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <GlobalStylesheet />
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}
