import "../styles/globals.css";
// import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
