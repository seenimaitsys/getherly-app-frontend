import React from "react";
import Header from "../../pages/components/Header";
import AboutAs from "../../pages/components/AboutAs";
import { Helmet } from "react-helmet";
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-AboutUs</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header page={"about"} />
      <AboutAs />
    </>
  );
};
export default AboutPage;
