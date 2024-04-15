import React from "react";
import Header from "../../pages/components/Header";
import VideoList from "../../pages/components/VideoList";
import { Helmet } from "react-helmet";
const How_DO_I_page = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-HowDoI</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header page={"howdoi"} />
      <VideoList />
    </>
  );
};
export default How_DO_I_page;
