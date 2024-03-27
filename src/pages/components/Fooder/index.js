/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import getherly from "../../../assert/getherlyfooter.svg";
import getherly2 from "../../../assert/getherlyFooder.png";
const Fooder = () => {
  const footer_Title = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "clamp(18px, 5vw, 22px)",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return (
    <>
      <Container
        style={{
          marginTop: "20vh",
        }}
      >
        {/* <Row className="gap-5">
          <Col sm={3}>
            <Col className="d-flex justify-content-center">
              <img
                src={getherly}
                alt="getherly"
                loading="lazy"
                width="60px"
                height="57.343px"
                className="mt-3"
              ></img>
              <img src={getherly2} loading="lazy" alt=""></img>
            </Col>

            <div className="fooder-col">2022 reserved</div>

            <div className="fooder-col">All rights reserved</div>
          </Col>
          <Col sm={4} className="d-flex flex-column justify-content-center">
            <h1
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Get in touch
            </h1>

            <div className="fooder-col">Boston , USA</div>

            <div className="fooder-col">Info@email.com</div>
          </Col>
          <Col sm={3} className="d-flex flex-column justify-content-center">
            <h1
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Learn more
            </h1>

            <div className="fooder-col">Terms of use</div>
            <div className="fooder-col">Privacy Policy</div>
          </Col>

          <Col
            sm={2}
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: "red" }}
          >
            <img
              src={getherly}
              alt="s"
              style={{
                width: "60px",
                height: "57.343px",
                flexShrink: "0",
              }}
            ></img>

            <div className="fooder-login">Log in</div>
          </Col>
        </Row> */}
        <Row className="fooder-continer gap-5">
          <Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img
                src={getherly}
                alt="getherly"
                loading="lazy"
                width="50px"
                height="50px"
                className=""
              ></img>
              <img
                src={getherly2}
                loading="lazy"
                height="70px"
                alt="logo"
              ></img>
            </Col>

            <div className="fooder-col">2022 reserved</div>

            <div className="fooder-col">All rights reserved</div>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h1 style={{ ...footer_Title }}>Get in touch</h1>

            <div className="fooder-col">Boston , USA</div>

            <div className="fooder-col">Info@email.com</div>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h1 style={{ ...footer_Title }}>Learn more</h1>

            <div className="fooder-col">Terms of use</div>
            <div className="fooder-col">Privacy Policy</div>
          </Col>

          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img
              src={getherly}
              alt="login"
              style={{
                width: "60px",
                height: "57.343px",
                flexShrink: "0",
              }}
            ></img>

            <div className="fooder-login">
              <a
                href="/login"
                target="_parent"
                className="text-decoration-none"
              >
                Log in
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Fooder;
