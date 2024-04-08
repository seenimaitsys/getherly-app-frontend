import React from "react";
import "./index.scss";
import CapsuleMoments from "../../../assert/CapsuleMoments.svg";

import demoimage1 from "../../../assert/demoimage1.png";
import demoimage2 from "../../../assert/demoimage2.png";
import { Container, Row, Col } from "react-bootstrap";
import TextStyles from "../../../assert/TextStyles.gif";
import Multipleeffectsandfilters from "../../../assert/Multipleeffectsandfilters.gif";
import Addmusic from "../../../assert/Addmusic.gif";
import GainFanbase from "../../../assert/GainFanbase.gif";
import PictureinPicture from "../../../assert/PictureinPicture.gif";
import Tagrelatives from "../../../assert/Tagrelatives.gif";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";
const Limelight = () => {
  const [currentResolution] = UseGetScreenResolution();
  const List = [
    {
      img: TextStyles,
      Title: "1. Text Styles",
    },

    {
      img: Multipleeffectsandfilters,
      Title: "2. Multiple effects and filters",
    },
    {
      img: Addmusic,
      Title: "3. Add music ",
    },
    {
      img: GainFanbase,
      Title: "4. Gain Fanbase",
    },
    {
      img: PictureinPicture,
      Title: "5. Picture in Picture ",
    },
    {
      img: Tagrelatives,
      Title: "6.Tag relatives ",
    },
  ];
  return (
    <>
      <Container
        style={{
          marginTop: "10%",
        }}
        fluid
      >
        <Row>
          <Col className="Limelight-continer mt-1 p-lg-5 p-md-3 p-sm-1 ">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Col xs={12} md={12}>
                <h2 className=" text-lg-start text-md-center">
                  Experience Limelight
                </h2>
              </Col>

              <Col
                className="d-flex justify-content-center justify-content-lg-start gap-2 mt-lg-5 mt-xs-5 mt-md-4"
                xs={12}
              >
                <h3 className=" text-lg-start text-center">
                  Time-Capsule Moments
                </h3>
                <img
                  src={CapsuleMoments}
                  alt="CapsuleMoments"
                  loading="lazy"
                ></img>
              </Col>

              <Col sm={12}>
                <p className="mt-3 mt-lg-0 text-lg-start text-md-center">
                  Preserve fleeting moments with a modern twist. Our app
                  transforms ordinary days into extraordinary memories,
                  capturing the essence of your family's everyday life in a
                  virtual time capsule of videos.
                </p>

                <p className="mt-2 mt-lg-0 text-lg-start text-md-center">
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
                  <Col
                    md={6}
                    sm={6}
                    xs={6}
                    className={`d-flex   d-xs-block d-lg-none d-flex align-items-start justify-content-start ${
                      currentResolution < 320 ? "w-100" : ""
                    }`}
                  >
                    <img
                      src={demoimage1}
                      alt="share reels"
                      loading="lazy"
                      width={"50%"}
                      height={"80%"}
                    ></img>
                    <img
                      src={demoimage2}
                      alt="make post"
                      width={"50%"}
                      height={"80%"}
                      style={{ marginTop: "3rem", marginLeft: "0.5rem" }}
                    ></img>
                  </Col>
                  <Col
                    className={` d-flex flex-wrap ${
                      currentResolution < 320 ? "w-100" : ""
                    }`}
                    xs={6}
                    lg={12}
                    md={6}
                    sm={6}
                    style={{
                      marginLeft: currentResolution >= 992 ? "-8%" : "0",
                    }}
                  >
                    {List.map((value, index) => {
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

                          <h5 className="appinstruction-steps">
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
            className="limelignt-demo-img d-none d-lg-block d-flex align-items-start justify-content-center gap-4"
          >
            <img
              src={demoimage1}
              alt="share reels"
              loading="lazy"
              width={"35%"}
              className=" p-2"
            ></img>
            <img
              src={demoimage2}
              alt="make post"
              className="p-2 ml-5"
              width={"35%"}
              style={{ marginTop: "15rem", marginLeft: "3rem" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Limelight;
