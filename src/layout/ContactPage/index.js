import React from "react";

import AddressMap from "../../pages/components/Contacts";
import { Helmet, HelmetProvider } from "react-helmet-async";
const ConnectPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Contact</title>
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:title" content="Getherly-Contact" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-Contact" />
          <meta property="og:url" content="https://www.getherly.net/contact" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:url" content="https://www.getherly.net/contact" />
          <meta name="robots" content="index, follow" />

          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider>
      <AddressMap />
    </>
  );
};
export default ConnectPage;
