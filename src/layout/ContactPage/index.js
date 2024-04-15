import React from "react";

import AddressMap from "../../pages/components/Contacts";
import { Helmet } from "react-helmet";
const ConnectPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-Contact</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <AddressMap />
    </>
  );
};
export default ConnectPage;
