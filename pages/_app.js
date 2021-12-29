import NextApp from "next/app";
import ErrorPage from "next/error";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { getGlobalData } from "../libs/globals";
import { getStrapiMedia } from "../libs/utils";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const { metadata } = global;
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: {
            url: getStrapiMedia(metadata.shareImage.url),
            width: metadata.shareImage.width,
            height: metadata.shareImage.height,
          },
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);
  const globalLocale = await getGlobalData(appContext.router.locale);

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  };
};

export default App;
