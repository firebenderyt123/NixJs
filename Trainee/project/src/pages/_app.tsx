import { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SSRProvider } from "@react-aria/ssr";
import { store } from "@store";

import "@styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}

export default App;
