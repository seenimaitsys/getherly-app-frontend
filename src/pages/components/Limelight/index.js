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
const Limelight = () => {
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
          <Col className="Limelight-continer mt-1 p-5 w-100">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Row>
                <h2>Experience Limelight</h2>
              </Row>
              <Row>
                <Col className="d-flex align-items-center justify-content-start gap-2 ">
                  <h3>Time-Capsule Moments</h3>
                  <img
                    src={CapsuleMoments}
                    alt="CapsuleMoments"
                    loading="lazy"
                  ></img>
                </Col>
              </Row>

              <Row>
                <p>
                  Preserve fleeting moments with a modern twist. Our app
                  transforms ordinary days into extraordinary memories,
                  capturing the essence of your family's everyday life in a
                  virtual time capsule of videos.
                </p>
                <p>
                  Limelight allows you to create and post videos to your family
                  and to the public . You can start your content creating
                  journey with our unique video editing options . In limelight
                  you can create a public club where you can post videos to the
                  public. You can tag your closed ones and upload the video in
                  high quality. Getherly limelight provides you unique features
                  to make your video high quality. You can gain seperate fans
                  for your family club and public club.
                </p>
              </Row>
              <Container fluid>
                <div className="app-working-steps">
                  {List.map((value, index) => {
                    return (
                      <Row key={index}>
                        <Col>
                          <img
                            src={value.img}
                            width={"50"}
                            height={"50"}
                            alt="icon"
                          ></img>
                          <h6>{value.Title}</h6>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Container>
            </AnimationOnScroll>
          </Col>

          <Col
            sm={6}
            className="limelignt-demo-img d-flex align-items-start justify-content-center gap-5"
          >
            <img
              src={demoimage1}
              alt="share reels"
              loading="lazy"
              width={"35%"}
              height={"541.86px"}
              className="mt-5"
            ></img>
            <img
              src={demoimage2}
              alt="make post"
              width={"35%"}
              height={"541.86px"}
              style={{ marginTop: "10rem" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Limelight;
