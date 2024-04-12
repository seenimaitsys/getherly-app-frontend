import React from "react";
import CapsuleMoments from "../../../assert/CapsuleMoments.svg";

import demoimage1 from "../../../assert/demoimage1.png";
import demoimage2 from "../../../assert/demoimage2.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { CapsuleMomentsList } from "./CapsuleMomentsList";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";
const Limelight = () => {
  const [currentResolution] = UseGetScreenResolution();

  return (
    <>
      <Container className="mt-10" fluid>
        <Row>
          <Col className=" mt-1 p-lg-5 p-md-3 p-sm-1 ">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Col xs={12} md={12}>
                <h2
                  className=" text-lg-start text-custom-gray-900 fw-bold font-Poppins fst-normal lh-0 text-md-center "
                  style={{ fontSize: "clamp(10px, 7vw, 3rem)" }}
                >
                  Experience Limelight
                </h2>
              </Col>

              <Col
                className="d-flex justify-content-center justify-content-lg-start gap-2 mt-lg-5 mt-xs-5 mt-md-4"
                xs={12}
              >
                <h3
                  className="text-black fw-semibold font-Inter fst-normal lh-0 text-lg-start text-center "
                  style={{ fontSize: "clamp(7px, 5vw, 1.9rem)" }}
                >
                  Time-Capsule Moments
                </h3>
                <img
                  src={CapsuleMoments}
                  alt="CapsuleMoments"
                  loading="lazy"
                ></img>
              </Col>

              <Col sm={12}>
                <p
                  className="text-custom-black-1 fw-mormal font-Poppins fst-normal lh-30 mt-3 mt-lg-0 text-lg-start text-md-center"
                  style={{ fontSize: "clamp(10px, 4vw, 20px)" }}
                >
                  Preserve fleeting moments with a modern twist. Our app
                  transforms ordinary days into extraordinary memories,
                  capturing the essence of your family's everyday life in a
                  virtual time capsule of videos.
                </p>

                <p
                  className="text-custom-gray-800 fw-mormal font-Poppins fst-normal lh-30 mt-2 mt-lg-0 text-lg-start text-md-center"
                  style={{ fontSize: " clamp(12px, 4vw, 22px)" }}
                >
                  Limelight allows you to create and post videos to your family
                  and to the public . You can start your content creating
                  journey with our unique video editing options . In limelight
                  you can create a public club where you can post videos to the
                  public. You can tag your closed ones and upload the video in
                  high quality. Getherly limelight provides you unique features
                  to make your video high quality. You can gain seperate fans
                  for your family club and public club.
                </p>
              </Col>
              <Container fluid className="mt-5 mt-lg-0">
                <Row>
                  {/* mobile design */}
                  <Col
                    md={6}
                    sm={6}
                    xs={6}
                    className={`d-flex   d-xs-block d-lg-none d-flex align-items-start justify-content-start ${
                      currentResolution < 320 ? "w-100" : ""
                    }`}
                  >
                    <Image
                      src={demoimage1}
                      alt="share reels"
                      loading="lazy"
                      width={"50%"}
                      height={"80%"}
                    ></Image>
                    <Image
                      src={demoimage2}
                      alt="make post"
                      width={"50%"}
                      height={"80%"}
                      className="mt-custom-2 ms-2"
                    ></Image>
                  </Col>
                  <Col
                    className={` d-flex flex-wrap ${
                      currentResolution < 320 ? "w-100" : ""
                    } ms-lg-n8`}
                    xs={6}
                    lg={12}
                    md={6}
                    sm={6}
                  >
                    {CapsuleMomentsList.map((value, index) => {
                      return (
                        <Col
                          key={index}
                          sm={6}
                          xs={6}
                          lg={4}
                          md={6}
                          className="p-0 p-lg-3"
                        >
                          <Image
                            src={value.img}
                            width={"50"}
                            height={"50"}
                            alt={value.Title}
                          ></Image>

                          <h5
                            className=" text-black font-Inter fw-semibold"
                            style={{ fontSize: "clamp(10px, 3vw, 22px)" }}
                          >
                            {value.Title}
                          </h5>
                        </Col>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </AnimationOnScroll>
          </Col>

          <Col
            sm={6}
            className=" d-none d-lg-block d-flex align-items-start justify-content-center gap-4"
          >
            <Image
              src={demoimage1}
              alt="share reels"
              loading="lazy"
              width={"35%"}
              className=" p-2"
            ></Image>
            <Image
              src={demoimage2}
              alt="make post"
              className="p-2  mt-15 ms-custom-3"
              width={"35%"}
            ></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Limelight;
