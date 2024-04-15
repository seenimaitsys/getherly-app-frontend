import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import getherly from "../../../assert/getherlyfooter.svg";
import getherly2 from "../../../assert/getherlyFooder.png";
const Fooder = () => {
  return (
    <>
      <footer>
        <Container className="mt-5 mb-5" fluid>
          <Row className="mt-5">
            <Col lg={3} md={6} sm={6}>
              <Col className="d-flex justify-content-center align-items-center mt-5">
                <Image
                  src={getherly}
                  alt="getherly"
                  loading="lazy"
                  width="50px"
                  height="50px"
                  fluid
                ></Image>
                <Image
                  src={getherly2}
                  loading="lazy"
                  height="70px"
                  alt="logo"
                ></Image>
              </Col>

              <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                2022 reserved
              </div>
              <a href="/#" target="_parent" className="text-decoration-none">
                <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                  All rights reserved
                </div>
              </a>
            </Col>
            <Col
              lg={3}
              sm={6}
              md={6}
              className="d-flex flex-column justify-content-center mt-5"
            >
              <h1 className="text-black fs-normal fw-semibold lh-0 fs-22 font-Poppins ">
                Get in touch
              </h1>

              <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                Boston , USA
              </div>
              <a
                href="mailto:support@twigscorp.com"
                target="_parent"
                className="text-decoration-none"
              >
                <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                  support@twigscorp.com
                </div>
              </a>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              className="d-flex flex-column justify-content-center mt-5"
            >
              <h1 className="text-black fst-normal fw-semibold lh-0 fs-22 font-Poppins">
                Learn more
              </h1>
              <a
                href="/terms"
                target="_parent"
                className="text-decoration-none"
              >
                <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                  Terms of use
                </div>
              </a>

              <a
                href="/privacy"
                target="_parent"
                className="text-decoration-none"
              >
                <div className="text-custom-gray-800 fst-normal fw-normal p-10 lh-normal font-Poppins fs-20">
                  Privacy Policy
                </div>
              </a>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              className="d-flex flex-column align-items-center justify-content-center mt-5"
            >
              <Image src={getherly} alt="login" width={"60px"}></Image>

              <div className="fooder-login text-login font-Poppins fw-semibold fs-20 fst-normal">
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
      </footer>
    </>
  );
};
export default Fooder;
