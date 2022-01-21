import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.700",
        color: "white",
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>sya-ri</title>
      <meta content="sya-ri's Portfolio" property="description" />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
