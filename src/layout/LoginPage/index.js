import React from "react";
import LoginForm from "../../pages/components/LoginForm";
import Header from "../../pages/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async"; //you get woring(UNSAFE_componentWillMount) then use (npm install react-helmet-async) other then  use (npm i react-helmet)

const LoginPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Getherly-Login</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </HelmetProvider>

      <Header />
      <LoginForm className="animate__animated animate__fadeInRight" />
    </>
  );
};
export default LoginPage;
