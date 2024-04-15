import React from "react";

import Terms from "../../pages/components/Terms";
import Header from "../../pages/components/Header";
import Fooder from "../../pages/components/Fooder";
import { Helmet } from "react-helmet";
const TermsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-Termss</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />
      <Terms />
      <Fooder />
    </>
  );
};
export default TermsPage;
