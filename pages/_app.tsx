import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>sya-ri</title>
      <meta content="sya-ri's Portfolio" property="description" />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
