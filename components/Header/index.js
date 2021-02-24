import Head from "next/head";

const Header = ({ description, title, type, url }) => (
  <Head>
    <title>{title} - Test</title>
    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_CLIENT}${url}`} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta
      property="og:url"
      content={`${process.env.NEXT_PUBLIC_CLIENT}${url}`}
    />
    <meta property="og:type" content={type} />
  </Head>
);

Header.defaultProps = {
  description: "Test.",
  type: "website",
};

export default Header;
