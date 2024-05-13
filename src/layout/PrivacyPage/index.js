import React from "react";

import Privacy from "../../components/Privacy";
import Header from "../../components/Header";
import Fooder from "../../components/Fooder";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const PolicyPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Privacy</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </HelmetProvider>
      <Header />
      <Privacy />
      <Fooder />
    </>
  );
};
export default PolicyPage;
