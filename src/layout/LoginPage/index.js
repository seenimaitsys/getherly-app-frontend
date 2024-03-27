import React from "react";
import LoginForm from "../../pages/components/LoginForm";
import Header from "../../pages/components/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginForm className="animate__animated animate__fadeInRight" />
    </>
  );
};
export default LoginPage;
