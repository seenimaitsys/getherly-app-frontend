import React from "react";
import Header from "../../components/Header";
import VideoList from "../../components/VideoList";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const How_DO_I_page = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Getherly-HowDoI</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:title" content="Getherly-HowDoI" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/../src/assert/robot2.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-HowDoI" />
          <meta property="og:url" content="https://www.getherly.net/how_do_i" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/../src/assert/robot2.png"
          />
          <meta
            name="twitter:url"
            content="https://www.getherly.net/how_do_i"
          />
          <meta name="robots" content="index, follow" />

          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider>

      <Header page={"howdoi"} />
      <VideoList />
    </>
  );
};
export default How_DO_I_page;
