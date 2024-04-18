import React from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const LoginPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Login</title>
          <meta
            name="description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta property="og:title" content="Getherly-Login" />
          <meta
            property="og:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Getherly-Login" />
          <meta property="og:url" content="https://www.getherly.net/login" />
          <meta
            name="twitter:description"
            content="Getherly is a family friendly social media app which helps you connect with your family and makes sure you have a fun experience with our features."
          />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/../src/assert/getherlyfooter.svg"
          />
          <meta name="twitter:url" content="https://www.getherly.net/login" />
          <meta name="robots" content="index, follow" />

          <meta name="keywords" content="family, social media app" />
        </Helmet>
      </HelmetProvider>

      <Header />
      <LoginForm className="animate__animated animate__fadeInRight" />
    </>
  );
};
export default LoginPage;
