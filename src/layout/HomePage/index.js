/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../pages/components/Header";
import AppContent from "../../pages/components/AppContent";
import AppFeatures from "../../pages/components/AppFeatures";
import Fooder from "../../pages/components/Fooder";
import ReviewsCard from "../../pages/components/UserReviewsCard";
import GetherlyVideo from "../../pages/components/GetherlyVideo";
import Appinstruction from "../../pages/components/Appinstruction";
import Limelight from "../../pages/components/Limelight";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const HomePage = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Getherly</title>
          <meta property="og:title" content="Getherly" />
          <meta
            property="og:description"
            content="An impressive and flawless site template that includes various UI elements and countless features, attractive ready-made blocks and rich pages, basically everything you need to create a unique and professional website."
          />
          <meta
            property="og:image"
            // content="../src/assert/getherly_reels.png"
            content="../../assert/getherly_reels.png"
          />

          <meta property="og:type" content="website" />
        </Helmet>
      </HelmetProvider>

      <Header />
      <AppContent />
      <AppFeatures />
      <Appinstruction />
      <Limelight />
      <GetherlyVideo />
      <ReviewsCard />
      <Fooder />
    </>
  );
};
export default HomePage;
