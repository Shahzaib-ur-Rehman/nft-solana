import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "@/app/store";
export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    color: {
      black: "#0F171C",
      white: "#ffffff",
      gray: "#BDCDD6",
      mediumgray: "#E3E4E5",
      lightgray1: "#BCBEC0",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
