/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../components/Header";
import AppContent from "../../components/AppContent";
import AppFeatures from "../../components/AppFeatures";
import Fooder from "../../components/Fooder";
import ReviewsCard from "../../components/UserReviewsCard";
import GetherlyVideo from "../../components/GetherlyVideo";
import Appinstruction from "../../components/Appinstruction";
import Limelight from "../../components/Limelight";
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
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:title" content="Getherly" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/../src/assert/getherly_reels.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly" />
          <meta property="og:url" content="https://www.getherly.net/" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/../src/assert/getherly_reels.png"
          />
          <meta name="twitter:url" content="https://www.getherly.net/" />
          <meta name="robots" content="index, follow" />

          <meta name="keywords" content="family, social media app" />
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
