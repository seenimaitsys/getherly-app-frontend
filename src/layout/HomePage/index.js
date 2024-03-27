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

const HomePage = () => {
  return (
    <>
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
