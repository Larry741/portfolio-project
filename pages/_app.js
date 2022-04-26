// import { Provider } from "react-redux";
import Head from "next/head";
import Script from "next/script";
import { WidthContextProvider } from "../components/store/width-context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://unpkg.com/trianglify@^4/dist/trianglify.bundle.js"
        id="trianglify cdn"
        strategy="beforeInteractive"
      ></Script>
      <WidthContextProvider>
        <Component {...pageProps} />
      </WidthContextProvider>
    </>
  );
}

export default MyApp;
