import Layout from "../components/Layout";
import "../styles/globals.css";
import { DataProvider } from "../context/dataContext";
import Script from "next/script";
import * as gtag from "../lib/gtag.js";

function MyApp({ Component, pageProps }) {

  return (
    <DataProvider>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="contratosmarbellaGA"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
