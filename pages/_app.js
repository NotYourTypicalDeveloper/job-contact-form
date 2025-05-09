import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import AppContainer from "../components/hoc/AppContainer.jsx";
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
