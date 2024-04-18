import React from "react";
import getherly_reels from "../../assert/getherly_reels.png";
import getherly_reels_comment from "../../assert/getherly_reels_comment.png";
import appfeature from "../../assert/appfeature.gif";
import robot from "../../assert/robot.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";
import { FeaturesList } from "./FeaturesList";
const AppFeatures = () => {
  const [currentResolution] = UseGetScreenResolution();

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center mt-5"
      >
        <Row className="w-100">
          <Col
            sm={2}
            className="d-flex justify-content-start flex-column d-none d-lg-block "
          >
            <Image
              src={robot}
              className="ms--20"
              alt="robo"
              width="100%"
              height="290.692px"
              loading="lazy"
            ></Image>
            <div>
              <Image
                src={appfeature}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 mt-4"
              ></Image>
            </div>
          </Col>
          <Col className="d-flex d-lg-none">
            {/* mobile design */}
            <Col>
              <Image
                src={appfeature}
                alt="how its work"
                loading="lazy"
                width={"60%"}
                fluid={true}
                className="rounded-10"
              ></Image>
            </Col>
            <Col>
              <Image
                src={getherly_reels}
                alt="how its work"
                loading="lazy"
                width={"60%"}
                className="rounded-10"
              ></Image>
            </Col>
          </Col>
          <Col
            lg={8}
            sm={12}
            className="d-flex align-items-center justify-content-start flex-column"
          >
            <h2
              className="text-features-title fw-bold font-Poppins fst-normal lh-0 mt-5"
              style={{
                fontSize:
                  currentResolution <= 992
                    ? "clamp(8px, 5vw, 3.6rem)"
                    : " clamp(20px, 3.5vw, 3rem)",
              }}
            >
              Getherly is the Only App you need to<br></br> Connect with your
              Family<br></br> and watch your Network Grow.
            </h2>
            <Container
              fluid
              className="d-flex align-items-center justify-content-center gap-3 flex-column mt-4 mt-lg-5"
            >
              {FeaturesList.map((value, index) => {
                return (
                  <AnimationOnScroll animateIn="animate__fadeIn" key={index}>
                    <Row className="d-flex align-items-center justify-content-center flex-column ">
                      <Col
                        className="d-flex align-items-center justify-content-center gap-2 "
                        sm={12}
                        xs={12}
                      >
                        <Image
                          src={value.img}
                          alt={value.Title}
                          loading="lazy"
                          fluid
                        ></Image>
                        <h4
                          className="h2 text-black fw-semibold font-Poppins fst-normal lh-0 mt-2"
                          style={{ fontSize: "clamp(14px, 5vw, 28px)" }}
                        >
                          {value.Title}
                        </h4>
                      </Col>

                      <Col
                        className="text-black fw-normal font-Poppins fst-normal lh-30 mt-2"
                        sm={12}
                        lg={10}
                        style={{
                          fontSize: "clamp(10px, 4vw, 23px)",
                        }}
                      >
                        <p>{value.Desc}</p>
                      </Col>
                    </Row>
                  </AnimationOnScroll>
                );
              })}
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-center flex-column d-none d-lg-block mt-5">
            <div>
              <Image
                src={getherly_reels}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 "
                fluid
              ></Image>
            </div>
            <div className="mt-5">
              <Image
                src={getherly_reels_comment}
                alt="how its work"
                loading="lazy"
                width={"100%"}
                className="rounded-4 mt-5"
                fluid
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppFeatures;
