import React from "react";
import "./index.scss";

import { Container, Row, Col } from "react-bootstrap";

import downloadapp from "../../../assert/download.gif";
import Addfamilymembers from "../../../assert/Addfamilymembers.gif";
import StartConnecting from "../../../assert/StartConnecting.gif";
import Createclub from "../../../assert/StartConnecting.gif";
import Becomecontentcreator from "../../../assert/Becomecontentcreator.gif";
import Editandpostvideos from "../../../assert/Becomecontentcreator.gif";
import howitswork from "../../../assert/howitswork.gif";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { UseGetScreenResolution } from "../GetScreenResolution";

const Appinstruction = () => {
  const [currentResolution] = UseGetScreenResolution();

  const List = [
    {
      img: downloadapp,
      Title: "1.Download",
    },

    {
      img: Addfamilymembers,
      Title: "2.Add family member",
    },
    {
      img: StartConnecting,
      Title: "3.Start Connecting",
    },
    {
      img: Createclub,
      Title: "4.Create club",
    },
    {
      img: Becomecontentcreator,
      Title: "5.Become content creator ",
    },
    {
      img: Editandpostvideos,
      Title: "6.Edit and post videos ",
    },
  ];
  return (
    <>
      <Container
        className=" overflow-hidden "
        style={{ marginTop: "10%" }}
        fluid
      >
        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
            <Col lg={7} xl={5} className="d-none d-lg-block">
              <img
                src={howitswork}
                alt="how its work"
                loading="lazy"
                width={"95%"}
                height={670}
                className="rounded-4 border border-dark"
              ></img>
            </Col>
          </Col>

          <Col md={12} lg={6}>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              className="appinstruction-content"
            >
              <p className="text-start mt-4 d-none d-lg-block">How it Works</p>

              <p className="mt-lg-5 mt-md-0 text-lg-start text-md-center h1">
                Download the app, create your
                <br /> family network, you're all set!
              </p>

              <p className="appinstruction-desc text-lg-start text-md-center mt-4 mt-sm-4  mt-lg-3">
                {" "}
                You can download the app from both App store and play store and
                start exploring your family members. Getherly provides features
                such as wall and limelight where you can post videos and photos
                to your family members. You can also create a public club in
                limelight and kickstart your content creation with our unique
                editing options.
              </p>
              <Container fluid className="mt-5 mt-lg-0">
                <Row className="app-working-steps d-flex">
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
                    className={`mobile-appinstruction d-flex flex-wrap  ${
                      currentResolution < 320 ? "w-100 " : ""
                    } ${
                      currentResolution <= 992
                        ? "align-items-center justify-content-center"
                        : ""
                    }`}
                    xs={7}
                    lg={12}
                    md={7}
                    sm={7}
                    xxs={12}
                    style={{
                      marginLeft: currentResolution >= 992 ? "-10%" : "0",
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

                          <p className="appinstruction-steps">{value.Title}</p>
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
