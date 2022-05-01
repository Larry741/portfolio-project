// import { Provider } from "react-redux";
import Script from "next/script";
import { WidthContextProvider } from "../components/store/width-context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"
        id="google maps cdn"
        strategy="beforeInteractive"
      ></Script>
      <WidthContextProvider>
        <Component {...pageProps} />
      </WidthContextProvider>
    </>
  );
}

export default MyApp;
