import React from "react";
import LoginForm from "../../pages/components/LoginForm";
import Header from "../../pages/components/Header";
import { Helmet } from "react-helmet";
const LoginPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Getherly-Login</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />
      <LoginForm className="animate__animated animate__fadeInRight" />
    </>
  );
};
export default LoginPage;
