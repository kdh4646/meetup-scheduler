import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //setting common layout for all pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
