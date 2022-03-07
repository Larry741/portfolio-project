// import { Provider } from "react-redux";
import { WidthContextProvider } from "../components/store/width-context";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <WidthContextProvider>
      <Component {...pageProps} />
    </WidthContextProvider>
  );
}

export default MyApp;
