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
          <link rel="canonical" href="https://www.getherly.net/contact" />
          <meta property="og:title" content="Getherly-Contact" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="/../src/assert/images/SingleFamilyimg.png"
          />
          <meta property="og:url" content="https://www.getherly.net/contact" />
          <meta property="og:image:alt" content="Getherly" />
          <meta property="og:site_name" content="Getherly" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-Contact" />
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
                "url": "https://www.getherly.net/contact",
                "logo": "/../src/assert/images/SingleFamilyimg.png"
              }
            `}
          </script>
          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider>
      <AddressMap />
    </>
  );
};
export default ConnectPage;
