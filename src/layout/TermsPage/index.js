import React from "react";
import Terms from "../../components/Terms";
// import Terms from "../../pages/components/Terms";
import Header from "../../components/Header";
import Fooder from "../../components/Fooder";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const TermsPage = () => {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Terms</title>
        </Helmet>
      </HelmetProvider> */}
      <Header />
      <Terms />
      <Fooder />
    </>
  );
};
export default TermsPage;
