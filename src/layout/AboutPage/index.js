import React from "react";
import Header from "../../pages/components/Header";
import AboutAs from "../../pages/components/AboutAs";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const AboutPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-AboutUs</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </HelmetProvider>
      <Header page={"about"} />
      <AboutAs />
    </>
  );
};
export default AboutPage;
