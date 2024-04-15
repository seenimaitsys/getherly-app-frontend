import React from "react";

import Privacy from "../../pages/components/Privacy";
import Header from "../../pages/components/Header";
import Fooder from "../../pages/components/Fooder";
import { Helmet } from "react-helmet";
const PolicyPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-Privacy</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />
      <Privacy />
      <Fooder />
    </>
  );
};
export default PolicyPage;
