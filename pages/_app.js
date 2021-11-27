import NextApp from 'next/app';
import ErrorPage from "next/error"
import Head from "next/head"
import { getGlobalData } from "../libs/globals";
import { getStrapiMedia } from "../libs/utils"
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {

  const { global } = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  return <>
    <Head>
      {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} /> */}
    </Head>
    <Component {...pageProps} />
  </>;
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      global: 'pt-BR',
    },
  };
};

export default App;
