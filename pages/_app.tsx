import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider, NETWORKS } from "@web3-ui/core";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <Provider network={NETWORKS.mumbai}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
);

export default MyApp;
