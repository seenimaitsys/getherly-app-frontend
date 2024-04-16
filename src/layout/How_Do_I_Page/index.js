import React from "react";
import Header from "../../pages/components/Header";
import VideoList from "../../pages/components/VideoList";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const How_DO_I_page = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Getherly-HowDoI</title>
          <meta charSet="utf-8" />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </HelmetProvider>

      <Header page={"howdoi"} />
      <VideoList />
    </>
  );
};
export default How_DO_I_page;
