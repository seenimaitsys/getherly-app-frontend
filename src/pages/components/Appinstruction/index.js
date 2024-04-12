import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import howitswork from "../../../assert/howitswork.gif";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";
import { Instructions } from "./Instructions";
const Appinstruction = () => {
  const [currentResolution] = UseGetScreenResolution();

  return (
    <>
      <Container className=" overflow-hidden mt-10" fluid>
        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
            <Col lg={7} xl={5} className="d-none d-lg-block">
              <Image
                src={howitswork}
                alt="how its work"
                loading="lazy"
                width={"95%"}
                height={670}
                className="rounded-4 border border-dark"
              ></Image>
            </Col>
          </Col>

          <Col md={12} lg={6}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <p className="text-start text-how-it-work fs-30 fw-semibold font-Inter mt-4 d-none d-lg-block">
                How it Works
              </p>

              <p
                className="mt-lg-5 mt-md-0 text-lg-start text-custom-gray-900 fw-bold font-Poppins  text-md-center h1 "
                style={{
                  fontSize:
                    currentResolution <= 992
                      ? "clamp(22px, 6vw, 45px)"
                      : " clamp(30px, 3vw, 45px)",
                  letterSpacing: "1px",
                }}
              >
                Download the app, create your
                <br /> family network, you're all set!
              </p>

              <p
                className=" text-lg-start text-custom-gray-800 fw-normal font-Poppins text-md-center mt-4 mt-sm-4  mt-lg-3"
                style={{ fontSize: "clamp(12px, 4vw, 25px)" }}
              >
                {" "}
                You can download the app from both App store and play store and
                start exploring your family members. Getherly provides features
                such as wall and limelight where you can post videos and photos
                to your family members. You can also create a public club in
                limelight and kickstart your content creation with our unique
                editing options.
              </p>
              <Container fluid className="mt-5 mt-lg-0">
                <Row className=" d-flex">
                  <Col
                    md={5}
                    sm={5}
                    xs={5}
                    className={`d-flex align-items-center  d-xs-block d-lg-none ${
                      currentResolution < 320 ? "w-100" : ""
                    } `}
                  >
                    <img
                      src={howitswork}
                      alt="how its work"
                      loading="lazy"
                      width={"100%"}
                      height={"100%"}
                      className="rounded-4 border border-dark"
                    ></img>
                  </Col>
                  <Col
                    className={` d-flex flex-wrap  ${
                      currentResolution < 320 ? "w-100 " : ""
                    } ${
                      currentResolution <= 992
                        ? "align-items-center justify-content-center"
                        : ""
                    } ms-lg-n10`}
                    xs={7}
                    lg={12}
                    md={7}
                    sm={7}
                    xxs={12}
                  >
                    {Instructions.map((value, index) => {
                      return (
                        <Col
                          key={index}
                          sm={6}
                          xs={6}
                          lg={4}
                          md={6}
                          className="p-0 p-lg-3"
                        >
                          <img
                            src={value.img}
                            width={"50"}
                            height={"50"}
                            alt={value.Title}
                          ></img>

                          <p
                            className=" text-black font-Inter fw-semibold"
                            style={{ fontSize: "clamp(10px, 3vw, 22px)" }}
                          >
                            {value.Title}
                          </p>
                        </Col>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Appinstruction;
