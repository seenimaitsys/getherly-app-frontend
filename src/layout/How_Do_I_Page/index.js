import React from "react";
import Header from "../../components/Header";
import VideoList from "../../components/VideoList";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const How_DO_I_page = () => {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>Getherly-HowDoI</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <link rel="canonical" href="https://www.getherly.net/how_do_i" />
          <meta property="og:title" content="Getherly-how-do-i" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="/../src/assert/images/SingleFamilyimg.png"
          />
          <meta property="og:url" content="https://www.getherly.net/how_do_i" />
          <meta property="og:image:alt" content="Getherly" />
          <meta property="og:site_name" content="Getherly" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-how-do-i" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="/../src/assert/images/SingleFamilyimg.png"
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://www.getherly.net/how_do_i",
                "logo": "/../src/assert/images/SingleFamilyimg.png"
              }
            `}
          </script>
          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider> */}

      <Header page={"howdoi"} />
      <VideoList />
    </>
  );
};
export default How_DO_I_page;
