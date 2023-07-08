import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from "../components/AppContainer";
import customTheme from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}

export default MyApp;
