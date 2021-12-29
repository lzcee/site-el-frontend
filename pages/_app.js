import NextApp from "next/app";
import Script from "next/script";
import ErrorPage from "next/error";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { GTM_ID } from "../libs/gtm";
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
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
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
