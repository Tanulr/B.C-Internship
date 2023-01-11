import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import React from "react";
import Layout from "../layouts/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from 'next-themes';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // useEffect (() => {
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //   jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
  <ThemeProvider enableSystem={true} attribute="class">
      <MoralisProvider initializeOnMount={false}>
      <Layout>
        <Component {...pageProps} margin-top= "200px"/>
      </Layout>
      </MoralisProvider>
  </ThemeProvider>
  );
}

export default MyApp;
  


